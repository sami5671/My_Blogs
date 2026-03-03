"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SignupAndPostPage() {
  const router = useRouter();

  // ====== Signup Form States ======
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState<string | null>(null);

  // ====== Post Editor States ======
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [postLoading, setPostLoading] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: { levels: [1, 2, 3] } }), Underline],
    content: "<p>Start writing something beautiful ✨</p>",
    immediatelyRender: false,
  });

  // ====== Profile Image Upload ======
  async function handleProfileImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.[0]) return;
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      setSignupLoading(true);
      setSignupError(null);

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Image upload failed");

      setProfileImage(data.data.url);
    } catch (err: any) {
      console.error(err);
      setSignupError(err.message);
    } finally {
      setSignupLoading(false);
    }
  }

  // ====== Signup Submit ======
  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setSignupLoading(true);
    setSignupError(null);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, image: profileImage }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      // Auto login
      await signIn("credentials", { email, password, redirect: false });
      router.push("/");
      router.refresh();
    } catch (err: any) {
      setSignupError(err.message);
    } finally {
      setSignupLoading(false);
    }
  }

  // ====== Social Login ======
  async function onGoogle() {
    setSignupLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setSignupLoading(false);
  }

  async function onGithub() {
    setSignupLoading(true);
    await signIn("github", { callbackUrl: "/" });
    setSignupLoading(false);
  }

  // ====== Post Image Preview ======
  useEffect(() => {
    if (!imageFile) {
      setImagePreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(imageFile);
    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  // ====== Post Submit ======
  const handlePostSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor) return;

    try {
      setPostLoading(true);

      let imageUrl = "";
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const uploadRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
          formData,
        );

        imageUrl = uploadRes.data.data.url;
      }

      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          image: imageUrl,
          tags: tags.trim(),
        }),
      });

      router.push("/");
      router.refresh();
    } catch (err) {
      alert("Something went wrong while posting.");
      console.error(err);
    } finally {
      setPostLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full gap-12 p-4">
      {/* ================== SIGNUP CARD ================== */}
      <div className="max-w-md w-full">
        <Card className="w-full rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/40 shadow-lg">
          <CardHeader className="text-center py-8 space-y-3">
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Create Account
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Please sign up to continue</CardDescription>
          </CardHeader>

          <CardContent className="px-8 pb-6">
            <form onSubmit={handleSignup} className="flex flex-col gap-6">
              <div className="space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-300">Name</Label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-300">Email</Label>
                <Input
                  type="email"
                  placeholder="admin@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-300">Password</Label>
                <Input
                  type="password"
                  placeholder="123456"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-gray-600 dark:text-gray-300">Profile Picture</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleProfileImageUpload}
                  className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60 cursor-pointer"
                />
                {profileImage && (
                  <img src={profileImage} alt="Profile Preview" className="w-20 h-20 rounded-full mt-2 object-cover" />
                )}
              </div>

              {signupError && <p className="text-sm text-red-500">{signupError}</p>}

              <Button
                type="submit"
                disabled={signupLoading}
                className="h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              >
                {signupLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </form>

            <div className="flex items-center justify-center mt-5 gap-2">
              <p>Already have an account?</p>
              <a href="/login" className="text-blue-400 underline">
                Login
              </a>
            </div>
          </CardContent>

          <CardFooter className="flex-col px-8 pb-8 gap-4">
            <div className="relative w-full text-center text-xs text-gray-400">
              <span className="bg-white dark:bg-gray-900 px-2 relative z-10">or Continue With</span>
              <div className="absolute left-0 top-1/2 w-full border-t border-gray-300 dark:border-gray-700 -z-0" />
            </div>

            <Button variant="outline" onClick={onGoogle} className="flex items-center justify-center gap-2 h-12 w-full">
              <FcGoogle size={20} />
              Continue with Google
            </Button>

            <Button variant="outline" onClick={onGithub} className="flex items-center justify-center gap-2 h-12 w-full">
              <FaGithub size={20} />
              Continue with Github
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* ================== POST CREATION ================== */}
      <div className="max-w-2xl w-full">
        <Card className="p-6 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Create a Post</h2>
          <form onSubmit={handlePostSubmit} className="flex flex-col gap-4">
            <Input placeholder="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <Input placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
            <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-md" />}

            <Button type="submit" disabled={postLoading}>
              {postLoading ? "Posting..." : "Create Post"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
