
const popularServices = [
  {
    id: 1,
    title: "Website Development",
    description: "Build modern and responsive websites",
    icon: "💻",
  },
  {
    id: 2,
    title: "Logo Design",
    description: "Create unique brand identities",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Video Editing",
    description: "Edit professional videos",
    icon: "🎬",
  },
  {
    id: 4,
    title: "SEO Services",
    description: "Improve your website visibility",
    icon: "📈",
  },
];

export default function PopularService() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900">
          Popular Services
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{service.icon}</div>

              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
