"use client";

import { useEffect, useState } from "react";

export default function Post({ params }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/posts/${params.id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [params.id]);

  if (!post) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
