import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-8 text-center">
      <h1 className="text-3xl font-semibold text-text">Page not found</h1>
      <p className="mt-2 text-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/home"
        className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-black hover:bg-primary-hover"
      >
        Go home
      </Link>
    </div>
  );
}
