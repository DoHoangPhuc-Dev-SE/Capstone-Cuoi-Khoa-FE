import JobDetail from "@/components/jobs/JobDetail";
import JobGallery from "@/components/jobs/JobGallery";
import JobReview from "@/components/jobs/JobReview";

const sampleJob = {
  id: 1,
  title: "I will create a professional website for your business",
  sellerName: "John Smith",
  rating: 4.9,
  reviewCount: 120,
  price: 50,
  image: "https://placehold.co/800x600",
  description:
    "I will create a modern, responsive and professional website for your business. The website will work smoothly on desktop, tablet and mobile devices.",
};

const sampleImages = [
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
  "https://placehold.co/800x600",
];

const sampleReviews = [
  {
    id: 1,
    userName: "Michael",
    date: "November 10, 2026",
    rating: 5,
    comment: "Excellent work! The website looks professional.",
  },
  {
    id: 2,
    userName: "Sarah",
    date: "November 12, 2026",
    rating: 4,
    comment: "Great communication and good quality.",
  },
];

export default async function JobDetailPage({ params }) {
  const { id } = await params;

  const job = {
    ...sampleJob,
    id,
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <JobDetail job={job} />

            <JobGallery images={sampleImages} />

            <JobReview reviews={sampleReviews} />
          </div>

          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-sm text-gray-500">Starting at</p>

            <p className="mb-5 text-3xl font-bold text-green-600">
              ${job.price}
            </p>

            <a
              href={`/booking?jobId=${job.id}`}
              className="block w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Continue to Booking
            </a>
          </aside>
        </div>
      </div>
    </main>
  );
}