
import BookingForm from "@/components/booking/BookingForm";
import BookingSummary from "@/components/booking/BookingSummary";

export default async function BookingPage({ searchParams }) {
  const params = await searchParams;
  const jobId = params?.jobId || "1";

  // Dữ liệu dịch vụ mẫu
  const job = {
    id: jobId,
    title: "I will create a professional website",
    sellerName: "John Smith",
    price: 50,
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Complete Your Booking
        </h1>

        <p className="mb-8 text-gray-600">
          Provide your project details to get started.
        </p>

        <div className="grid items-start gap-8 lg:grid-cols-[2fr_1fr]">
          <BookingForm job={job} />

          <BookingSummary
            job={job}
            packageType="basic"
          />
        </div>
      </div>
    </main>
  );
}
