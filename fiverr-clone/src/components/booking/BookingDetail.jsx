export default function BookingDetails({ booking }) {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700",
    confirmed: "bg-green-100 text-green-700",
    completed: "bg-blue-100 text-blue-700",
    cancelled: "bg-red-100 text-red-700",
  };

  const status = booking?.status || "pending";

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        Booking Details
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Booking ID</p>
          <p className="font-semibold text-gray-900">
            {booking?.id || "Not available"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Booking Date</p>
          <p className="font-semibold text-gray-900">
            {booking?.bookingDate || "Not available"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Deadline</p>
          <p className="font-semibold text-gray-900">
            {booking?.deadline || "Not available"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Requirements</p>
          <p className="text-gray-700">
            {booking?.requirements || "No requirements provided"}
          </p>
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-500">Status</p>
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold ${
              statusStyles[status] || statusStyles.pending
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}