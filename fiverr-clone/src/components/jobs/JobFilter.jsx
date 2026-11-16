
"use client";

import { useState } from "react";

export default function JobFilter({ onFilterChange }) {
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilterChange = (newFilters) => {
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);

    handleFilterChange({
      category: value,
      sortBy,
      maxPrice,
    });
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortBy(value);

    handleFilterChange({
      category,
      sortBy: value,
      maxPrice,
    });
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setMaxPrice(value);

    handleFilterChange({
      category,
      sortBy,
      maxPrice: value,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-4">

      {/* Category Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Category
        </label>

        <select
          value={category}
          onChange={handleCategoryChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
        >
          <option value="all">All Categories</option>
          <option value="design">Graphics & Design</option>
          <option value="programming">Programming & Tech</option>
          <option value="marketing">Digital Marketing</option>
          <option value="writing">Writing & Translation</option>
          <option value="video">Video & Animation</option>
        </select>
      </div>

      {/* Sort Filter */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Sort By
        </label>

        <select
          value={sortBy}
          onChange={handleSortChange}
          className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
        >
          <option value="default">Recommended</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Maximum Price */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-gray-700">
          Maximum Price ($)
        </label>

        <input
          type="number"
          min="0"
          value={maxPrice}
          onChange={handlePriceChange}
          placeholder="Enter price"
          className="w-36 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
        />
      </div>

    </div>
  );
}
