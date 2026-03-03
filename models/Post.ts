import mongoose from "mongoose";

const calculateReadTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    author: { type: String, default: "MD Sami Alam", immutable: true },
    tags: { type: String, trim: true }, // ✅ save as string
    image: { type: String, required: true },
    readTime: { type: Number },
  },
  { timestamps: true },
);

PostSchema.pre("save", function () {
  if (this.content) {
    this.readTime = calculateReadTime(this.content);
  }
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
