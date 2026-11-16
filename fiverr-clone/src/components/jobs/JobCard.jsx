
import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">

      {/* Service Image */}
      <div className="flex h-48 items-center justify-center bg-gray-100">
        {job?.image ? (
          <img
            src={job.image}
            alt={job.title || "Service"}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-400">
            Service Image
          </span>
        )}
      </div>

      {/* Service Information */}
      <div className="p-4">

        {/* Seller */}
        <p className="mb-2 text-sm font-medium text-gray-500">
          {job?.sellerName || "Freelancer"}
        </p>

        {/* Title */}
        <Link
          href={`/jobs/${job?.id || ""}`}
          className="line-clamp-2 min-h-12 font-semibold text-gray-800 hover:text-green-600"
        >
          {job?.title || "Service title"}
        </Link>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1 text-sm">
          <span className="text-yellow-500">★</span>

          <span className="font-semibold text-gray-800">
            {job?.rating ?? "New"}
          </span>

          {job?.reviewCount != null && (
            <span className="text-gray-400">
              ({job.reviewCount} reviews)
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-4 border-t border-gray-100 pt-3 text-right">
          <span className="text-xs font-semibold uppercase text-gray-500">
            Starting at
          </span>

          <p className="text-xl font-bold text-gray-900">
            ${job?.price ?? 0}
          </p>
        </div>

      </div>
    </div>
  );
}
