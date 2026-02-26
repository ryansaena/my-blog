import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — DevBlog",
  description: "All blog posts about my tech journey.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        All posts, sorted by most recent.
      </p>

      {posts.length === 0 ? (
        <p className="text-zinc-500 dark:text-zinc-400">
          No posts yet. Add <code>.md</code> files to{" "}
          <code>content/posts/</code> to get started.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
