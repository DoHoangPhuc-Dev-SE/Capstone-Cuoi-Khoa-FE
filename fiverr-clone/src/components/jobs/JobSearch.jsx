
"use client";

import { useState } from "react";

export default function JobSearch({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onSearch) {
      onSearch(keyword.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl overflow-hidden rounded-lg border border-gray-300 bg-white focus-within:border-green-600"
    >
      <input
        type="text"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="What service are you looking for?"
        className="min-w-0 flex-1 px-4 py-3 text-sm outline-none"
      />

      <button
        type="submit"
        className="bg-green-600 px-6 font-semibold text-white transition hover:bg-green-700"
      >
        Search
      </button>
    </form>
  );
}
