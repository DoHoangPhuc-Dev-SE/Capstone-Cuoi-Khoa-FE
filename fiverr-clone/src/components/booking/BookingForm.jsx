
"use client";

import { useState } from "react";

export default function BookingForm({ job }) {
  const [formData, setFormData] = useState({
    packageType: "basic",
    requirements: "",
    deadline: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingData = {
      jobId: job?.id,
      ...formData,
    };

    console.log("Booking information:", bookingData);
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Book This Service
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Package */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Select Package
          </label>

          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-600"
          >
            <option value="basic">Basic Package</option>
            <option value="standard">Standard Package</option>
            <option value="premium">Premium Package</option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Expected Deadline
          </label>

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-600"
          />
        </div>

        {/* Requirements */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Project Requirements
          </label>

          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Describe what you need from the freelancer..."
            rows={5}
            required
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-green-600"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Continue to Booking
        </button>

      </form>
    </div>
  );
}
