
import Link from "next/link";

export default function JobDetail({ job }) {
  if (!job) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          Service not found
        </h2>

        <Link
          href="/jobs"
          className="mt-4 inline-block text-green-600 hover:underline"
        >
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 lg:grid-cols-3">

      {/* Main Information */}
      <div className="lg:col-span-2">

        <Link
          href="/jobs"
          className="mb-6 inline-block text-sm text-gray-500 hover:text-green-600"
        >
          ← Back to services
        </Link>

        <h1 className="text-3xl font-bold text-gray-900">
          {job.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
          <span className="font-semibold text-gray-800">
            {job.sellerName || "Freelancer"}
          </span>

          <span className="text-yellow-500">
            ★ {job.rating ?? "New"}
          </span>

          {job.reviewCount != null && (
            <span className="text-gray-500">
              ({job.reviewCount} reviews)
            </span>
          )}
        </div>

        {/* Image */}
        <div className="mt-8 flex h-80 items-center justify-center overflow-hidden rounded-xl bg-gray-100">
          {job.image ? (
            <img
              src={job.image}
              alt={job.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-gray-400">
              Service Image
            </span>
          )}
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">
            About This Service
          </h2>

          <p className="leading-7 text-gray-600">
            {job.description || "No description available."}
          </p>
        </div>

      </div>

      {/* Booking Information */}
      <aside className="h-fit rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">
          Service Package
        </h2>

        <p className="mt-5 text-sm text-gray-500">
          Starting at
        </p>

        <p className="mt-1 text-3xl font-bold text-gray-900">
          ${job.price ?? 0}
        </p>

        <Link
          href={`/booking?jobId=${job.id}`}
          className="mt-6 block w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Continue
        </Link>

        <p className="mt-4 text-center text-xs text-gray-500">
          Contact the freelancer for more information.
        </p>
      </aside>

    </div>
  );
}
