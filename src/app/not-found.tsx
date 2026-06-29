import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">
        Error 404
      </span>
      <h1 className="font-display mt-4 text-5xl text-white sm:text-7xl">
        Out of Frame.
      </h1>
      <p className="mt-5 max-w-md text-base text-white/60">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        Let&rsquo;s get you back to the portfolio.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
      >
        Back to Home
      </Link>
    </div>
  );
}
