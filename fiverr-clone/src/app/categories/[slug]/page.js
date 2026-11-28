
const categories = {
  "graphics-design": {
    name: "Graphics & Design",
    description: "Discover creative design services from talented freelancers.",
  },
  "programming-tech": {
    name: "Programming & Tech",
    description: "Find developers for websites, applications and technology projects.",
  },
  "digital-marketing": {
    name: "Digital Marketing",
    description: "Grow your business with professional marketing services.",
  },
  "video-animation": {
    name: "Video & Animation",
    description: "Explore video editing, animation and motion graphics services.",
  },
  "writing-translation": {
    name: "Writing & Translation",
    description: "Find writing, editing and translation services.",
  },
  "music-audio": {
    name: "Music & Audio",
    description: "Discover music production and audio services.",
  },
  business: {
    name: "Business",
    description: "Find professional business support services.",
  },
  "ai-services": {
    name: "AI Services",
    description: "Explore services powered by artificial intelligence.",
  },
};

const sampleJobs = [
  {
    id: 1,
    title: "I will design a professional business logo",
    seller: "Anna Design",
    price: 30,
    category: "graphics-design",
  },
  {
    id: 2,
    title: "I will build a modern responsive website",
    seller: "John Developer",
    price: 100,
    category: "programming-tech",
  },
  {
    id: 3,
    title: "I will manage your social media marketing",
    seller: "Marketing Pro",
    price: 50,
    category: "digital-marketing",
  },
  {
    id: 4,
    title: "I will edit professional videos",
    seller: "Video Studio",
    price: 40,
    category: "video-animation",
  },
  {
    id: 5,
    title: "I will write SEO friendly articles",
    seller: "Content Writer",
    price: 25,
    category: "writing-translation",
  },
  {
    id: 6,
    title: "I will produce professional background music",
    seller: "Audio Master",
    price: 60,
    category: "music-audio",
  },
  {
    id: 7,
    title: "I will create a business plan for your startup",
    seller: "Business Expert",
    price: 80,
    category: "business",
  },
  {
    id: 8,
    title: "I will create AI generated images",
    seller: "AI Creator",
    price: 35,
    category: "ai-services",
  },
];

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = categories[slug];

  if (!category) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Category not found
          </h1>
          <p className="mt-3 text-gray-600">
            The category you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  const filteredJobs = sampleJobs.filter(
    (job) => job.category === slug
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm text-gray-500">
          Home / Categories / {category.name}
        </p>

        <h1 className="text-3xl font-bold text-gray-900">
          {category.name}
        </h1>

        <p className="mt-3 text-gray-600">
          {category.description}
        </p>

        <h2 className="mb-6 mt-10 text-xl font-semibold text-gray-900">
          Services in this category
        </h2>

        {filteredJobs.length === 0 ? (
          <p className="text-gray-500">
            No services available in this category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-40 items-center justify-center bg-gray-100 text-gray-400">
                  Service Image
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-900">
                    {job.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    By {job.seller}
                  </p>

                  <div className="mt-4 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500">
                      Starting at
                    </p>
                    <p className="text-xl font-bold text-green-600">
                      ${job.price}
                    </p>
                  </div>

                  <a
                    href={`/jobs/${job.id}`}
                    className="mt-4 block rounded-lg bg-green-600 py-2.5 text-center font-medium text-white transition hover:bg-green-700"
                  >
                    View Service
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
