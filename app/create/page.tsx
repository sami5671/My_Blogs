"use client";

import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Bold,
  Code2,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo,
  Strikethrough,
  Underline as UnderlineIcon,
  Undo,
} from "lucide-react";

export default function Create() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
    ],
    content: "<p>Start writing something beautiful ✨</p>",
    immediatelyRender: false,
  });

  useEffect(() => {
    if (!imageFile) {
      setImagePreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(imageFile);
    setImagePreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editor || !imageFile) return;

    const content = editor.getHTML();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", imageFile);

      const uploadRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        formData,
      );

      const imageUrl = uploadRes.data.data.url;

      // Save tags as a plain string
      const tagString = tags.trim();

      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          image: imageUrl,
          tags: tagString, // ✅ just a string
        }),
      });

      router.push("/");
      router.refresh();
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const ToolBtn = ({
    onClick,
    active,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 rounded-lg transition-all duration-200
        ${active ? "bg-white/30 text-white" : "text-white/70 hover:bg-white/20 hover:text-white"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-10">
      <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Create Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {imagePreview && (
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/20">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white file:text-white"
            onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
            required
          />

          <input
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />

          {editor && (
            <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl">
              <ToolBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive("bold")}>
                <Bold size={18} />
              </ToolBtn>
              <ToolBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive("italic")}>
                <Italic size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                active={editor.isActive("underline")}
              >
                <UnderlineIcon size={18} />
              </ToolBtn>
              <ToolBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive("strike")}>
                <Strikethrough size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                active={editor.isActive("heading", { level: 1 })}
              >
                <Heading1 size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                active={editor.isActive("heading", { level: 2 })}
              >
                <Heading2 size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                active={editor.isActive("heading", { level: 3 })}
              >
                <Heading3 size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                active={editor.isActive("bulletList")}
              >
                <List size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                active={editor.isActive("orderedList")}
              >
                <ListOrdered size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                active={editor.isActive("blockquote")}
              >
                <Quote size={18} />
              </ToolBtn>
              <ToolBtn
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                active={editor.isActive("codeBlock")}
              >
                <Code2 size={18} />
              </ToolBtn>
              <ToolBtn onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <Minus size={18} />
              </ToolBtn>
              <ToolBtn onClick={() => editor.chain().focus().undo().run()}>
                <Undo size={18} />
              </ToolBtn>
              <ToolBtn onClick={() => editor.chain().focus().redo().run()}>
                <Redo size={18} />
              </ToolBtn>
            </div>
          )}

          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl p-6 min-h-[300px] text-white">
            <EditorContent editor={editor} />
          </div>

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl bg-white/20 hover:bg-white/30 text-white font-semibold transition-all"
          >
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
}
