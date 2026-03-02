"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    router.push("/");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-5">Create Blog Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="border p-2 w-full mb-3"
          placeholder="Content"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="bg-green-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}
