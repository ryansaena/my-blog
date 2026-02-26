import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Git",
  "REST APIs",
  "Tailwind CSS",
  "SQL",
  "Docker",
  "Cloud (AWS/Azure)",
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        {/* Left sticky panel — About Me */}
        <aside className="w-full flex-shrink-0 space-y-5 md:sticky md:top-20 md:w-72 md:self-start">
          {/* Avatar + Bio */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-bold text-white">
                RS
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  Ryan Saena
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Hey there! I&apos;m a software engineer passionate about building
              great products and continuously learning new technologies. This
              blog is where I document my journey.
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Links
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/ryansaena"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                GitHub →
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                LinkedIn →
              </a>
              <Link
                href="/about"
                className="text-sm text-zinc-600 transition-colors hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400"
              >
                Full bio →
              </Link>
            </div>
          </div>
        </aside>

        {/* Right scrollable — Blog Posts */}
        <div className="min-w-0 flex-1">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Posts
          </h2>
          {posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 dark:text-zinc-400">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
