
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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-[#12332b] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Find the right freelance service for your business
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Connect with talented freelancers and turn your ideas into reality.
          </p>

          <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="What service are you looking for today?"
              className="min-w-0 flex-1 rounded-lg bg-white px-5 py-4 text-gray-900 outline-none"
            />

            <button className="rounded-lg bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600">
              Search
            </button>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Popular: Website Design · Logo Design · SEO · Video Editing
          </p>
        </div>
      </section>

      {/* Categories section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
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
      </section>

      {/* Introduction section */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900">
            A marketplace for freelance services
          </h2>

          <p className="mt-5 max-w-3xl leading-7 text-gray-600">
            Discover services, compare freelancers, and find the right people
            to help you complete your projects.
          </p>

          <Link
            href="/jobs"
            className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Explore services
          </Link>
        </div>
      </section>
    </main>
  );
}
