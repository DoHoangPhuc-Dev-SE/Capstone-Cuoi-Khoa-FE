
import Link from "next/link";

const categories = [
  "Graphics & Design",
  "Programming & Tech",
  "Digital Marketing",
  "Video & Animation",
  "Writing & Translation",
  "Music & Audio",
  "Business",
  "AI Services",
];

export default function Navbar() {
  return (
    <nav className="hidden w-full border-b border-gray-200 bg-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 overflow-x-auto px-6 py-3">
        {categories.map((category) => (
          <Link
            key={category}
            href="/jobs"
            className="shrink-0 whitespace-nowrap text-sm text-gray-600 transition hover:text-green-600"
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}
