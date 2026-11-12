
const featuredServices = [
  {
    id: 1,
    title: "Professional Website Design",
    seller: "Freelancer Studio",
    rating: 4.9,
    price: 50,
    category: "Web Design",
  },
  {
    id: 2,
    title: "Modern Logo Design",
    seller: "Creative Designer",
    rating: 4.8,
    price: 30,
    category: "Graphic Design",
  },
  {
    id: 3,
    title: "Professional Video Editing",
    seller: "Video Creator",
    rating: 5.0,
    price: 40,
    category: "Video Editing",
  },
  {
    id: 4,
    title: "SEO Optimization Service",
    seller: "Digital Expert",
    rating: 4.9,
    price: 60,
    category: "Digital Marketing",
  },
];

export default function FeaturedService() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Services
          </h2>

          <a
            href="/jobs"
            className="font-semibold text-green-600 hover:text-green-700"
          >
            View all
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-xl border border-gray-200 transition hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-gray-100">
                <span className="text-5xl">💼</span>
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500">
                  {service.category}
                </p>

                <h3 className="mt-2 font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  By {service.seller}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-yellow-600">
                    ★ {service.rating}
                  </span>

                  <span className="font-bold text-gray-900">
                    From ${service.price}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
