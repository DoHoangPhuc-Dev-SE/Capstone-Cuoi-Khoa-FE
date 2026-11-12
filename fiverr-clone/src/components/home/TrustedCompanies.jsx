
const companies = [
  "Google",
  "Meta",
  "Microsoft",
  "Netflix",
  "Amazon",
];

export default function TrustedCompanies() {
  return (
    <section className="border-b border-gray-200 bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-medium text-gray-500">
          Trusted by businesses worldwide
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
          {companies.map((company) => (
            <span
              key={company}
              className="text-xl font-bold tracking-wide text-gray-400 transition hover:text-gray-700"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
