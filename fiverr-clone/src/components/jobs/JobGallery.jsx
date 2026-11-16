
"use client";

import { useState } from "react";

export default function JobGallery({ images = [] }) {
  const [activeImage, setActiveImage] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex h-80 items-center justify-center rounded-xl bg-gray-100">
        <p className="text-sm text-gray-400">
          No images available
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {/* Main Image */}
      <div className="h-80 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={images[activeImage]}
          alt={`Service image ${activeImage + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(index)}
            className={`h-20 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              activeImage === index
                ? "border-green-600"
                : "border-transparent"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
}
