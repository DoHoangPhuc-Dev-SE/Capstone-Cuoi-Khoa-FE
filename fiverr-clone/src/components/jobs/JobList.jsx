
import JobCard from "./JobCard";

export default function JobList({ jobs = [] }) {
  if (jobs.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 py-12 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          No services found
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Try searching with another keyword.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
