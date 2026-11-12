
export default function HeroSection() {
  return (
    <section className="bg-[#12332b] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Find the right freelance service for your business
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Connect with talented freelancers and turn your ideas into reality.
        </p>

        {/* Search bar */}
        <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="What service are you looking for today?"
            className="min-w-0 flex-1 rounded-lg bg-white px-5 py-4 text-gray-900 outline-none"
          />

          <button
            type="button"
            className="rounded-lg bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
          >
            Search
          </button>
        </div>

        {/* Popular searches */}
        <p className="mt-6 text-sm text-gray-300">
          Popular: Website Design · Logo Design · SEO · Video Editing
        </p>
      </div>
    </section>
  );
}
