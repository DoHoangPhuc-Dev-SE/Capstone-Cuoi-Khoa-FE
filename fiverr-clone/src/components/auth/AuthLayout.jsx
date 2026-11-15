
import Link from "next/link";

export default function AuthLayout({ children, title, description }) {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="text-3xl font-bold text-gray-900">
            fiverr<span className="text-green-600">.</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          {title && (
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-900">
              {title}
            </h1>
          )}

          {description && (
            <p className="mb-6 text-center text-sm text-gray-500">
              {description}
            </p>
          )}

          {children}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-5 text-center text-sm text-gray-500">
        © 2026 Fiverr Clone. All rights reserved.
      </footer>

    </main>
  );
}
