
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

export default function CategoryList() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore popular categories
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              href="/jobs"
              className="rounded-xl border border-gray-200 p-6 font-medium text-gray-800 transition hover:border-green-500 hover:shadow-md"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
