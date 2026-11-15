
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-gray-900">
          fiverr<span className="text-green-600">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-gray-700 md:flex">
          <Link href="/jobs" className="hover:text-green-600">
            Explore
          </Link>

          <Link href="/jobs" className="hover:text-green-600">
            Services
          </Link>

          <Link href="/seller" className="hover:text-green-600">
            Become a Seller
          </Link>
        </nav>

        {/* Authentication */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          <Link
            href="/login"
            className="text-gray-700 hover:text-green-600"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="rounded-md border border-gray-900 px-5 py-2 text-gray-900 transition hover:bg-green-600 hover:text-white"
          >
            Join
          </Link>
        </div>

      </div>
    </header>
  );
}
