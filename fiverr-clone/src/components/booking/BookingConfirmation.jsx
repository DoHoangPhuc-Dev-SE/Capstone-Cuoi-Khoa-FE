export default function BookingConfirmation({ booking }) {
  return (
    <div className="mx-auto w-full max-w-lg rounded-xl border border-gray-200 bg-white p-8 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
        ✓
      </div>

      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        Booking Successful!
      </h2>

      <p className="mb-6 text-gray-600">
        Your service booking has been submitted successfully.
      </p>

      <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
        <p className="mb-2 text-sm text-gray-500">Booking ID</p>
        <p className="mb-4 font-semibold text-gray-900">
          {booking?.id || "Pending"}
        </p>

        <p className="mb-2 text-sm text-gray-500">Service</p>
        <p className="font-semibold text-gray-900">
          {booking?.jobTitle || "Service name"}
        </p>
      </div>

      <a
        href="/orders"
        className="block w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
      >
        View My Orders
      </a>

      <a
        href="/"
        className="mt-3 block text-sm font-medium text-gray-600 hover:text-green-600"
      >
        Back to Homepage
      </a>
    </div>
  );
}