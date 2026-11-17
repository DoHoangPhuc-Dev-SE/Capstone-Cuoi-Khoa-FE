export default function BookingSummary({ job, packageType }) {
  const packageNames = {
    basic: "Basic Package",
    standard: "Standard Package",
    premium: "Premium Package",
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-5 text-xl font-bold text-gray-900">
        Booking Summary
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-semibold text-gray-900">
            {job?.title || "Service name"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Seller</p>
          <p className="font-semibold text-gray-900">
            {job?.sellerName || "Seller name"}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Selected Package</p>
          <p className="font-semibold text-gray-900">
            {packageNames[packageType] || "Basic Package"}
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500">Total Price</p>
          <p className="text-2xl font-bold text-green-600">
            ${job?.price || 0}
          </p>
        </div>
      </div>
    </div>
  );
}