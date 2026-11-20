"use client";

import { useState } from "react";
import JobSearch from "@/components/jobs/JobSearch";
import JobFilter from "@/components/jobs/JobFilter";
import JobList from "@/components/jobs/JobList";

const sampleJobs = [
  {
    id: 1,
    title: "I will create a professional website",
    sellerName: "John Smith",
    rating: 4.9,
    reviewCount: 120,
    price: 50,
    image: "https://placehold.co/400x300",
  },
  {
    id: 2,
    title: "I will design a modern logo",
    sellerName: "Anna Design",
    rating: 4.8,
    reviewCount: 85,
    price: 30,
    image: "https://placehold.co/400x300",
  },
  {
    id: 3,
    title: "I will develop a mobile application",
    sellerName: "David Developer",
    rating: 5,
    reviewCount: 60,
    price: 100,
    image: "https://placehold.co/400x300",
  },
];

export default function JobsPage() {
  const [keyword, setKeyword] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    sortBy: "popular",
    maxPrice: "",
  });

  const filteredJobs = sampleJobs
    .filter((job) =>
      job.title.toLowerCase().includes(keyword.toLowerCase())
    )
    .filter((job) =>
      filters.maxPrice
        ? job.price <= Number(filters.maxPrice)
        : true
    )
    .sort((a, b) => {
      if (filters.sortBy === "price-low") return a.price - b.price;
      if (filters.sortBy === "price-high") return b.price - a.price;
      return b.rating - a.rating;
    });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Explore Freelance Services
        </h1>

        <p className="mb-8 text-gray-600">
          Find the right freelancer for your project.
        </p>

        <div className="mb-8 grid gap-4 md:grid-cols-[2fr_1fr]">
          <JobSearch onSearch={setKeyword} />
          <JobFilter onFilterChange={setFilters} />
        </div>

        <JobList jobs={filteredJobs} />
      </div>
    </main>
  );
}