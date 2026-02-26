import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
        Welcome to my{" "}
        <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Dev Blog
        </span>
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Documenting my journey in tech — sharing learnings, experiences, and
        insights from the world of software engineering.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/blog"
          className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Read the Blog
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
