
export default function JobReview({ reviews = [] }) {
  if (reviews.length === 0) {
    return (
      <div className="mt-8 rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900">
          Customer Reviews
        </h2>

        <p className="mt-4 text-sm text-gray-500">
          This service has no reviews yet.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Customer Reviews ({reviews.length})
      </h2>

      <div className="space-y-5">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg border border-gray-200 bg-white p-5"
          >
            {/* Reviewer Information */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                {review.userName?.charAt(0) || "U"}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {review.userName || "Anonymous"}
                </h3>

                <p className="text-xs text-gray-500">
                  {review.date || "Recently"}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="mt-3 text-yellow-500">
              {"★".repeat(
                Math.min(5, Math.max(0, Number(review.rating) || 0))
              )}
              <span className="ml-2 text-sm font-semibold text-gray-700">
                {review.rating ?? 0}/5
              </span>
            </div>

            {/* Comment */}
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {review.comment || "No comment provided."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
