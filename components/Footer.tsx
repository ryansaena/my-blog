export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            className="font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            className="font-medium text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} DevBlog. All rights reserved.</p>
      </div>
    </footer>
  );
}
