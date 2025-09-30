"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Zone = {
  id: number;
  name: string;
  visits: number;
};

const sampleZones: Zone[] = [
  { id: 1, name: "Entrance", visits: 120 },
  { id: 2, name: "Electronics", visits: 95 },
  { id: 3, name: "Groceries", visits: 180 },
  { id: 4, name: "Clothing", visits: 75 },
  { id: 5, name: "Checkout", visits: 140 },
  { id: 6, name: "Customer Service", visits: 60 },
];

export default function ZoneVisits() {
  const [expanded, setExpanded] = useState(false);

  const displayedZones = expanded ? sampleZones : sampleZones.slice(0, 4);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">
        Most Visited Areas Today
      </h2>

      {/* Grid with 2 cards per row on medium+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-1 md:gap-4">
        {displayedZones.map((zone) => (
          <div
            key={zone.id}
            className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-4"
          >
            <h3 className="text-lg font-medium text-gray-900">{zone.name}</h3>
            <p className="text-gray-500 text-sm mt-1">Visits today</p>
            <p className="text-2xl font-semibold text-emerald-600">
              {zone.visits}
            </p>
          </div>
        ))}
      </div>

      {/* Show More / Less button */}
      <div className="flex justify-center">
        <button
          className="flex items-center text-emerald-600 text-sm font-medium hover:text-emerald-700 transition"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              Show Less <ChevronUp className="ml-1 h-4 w-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="ml-1 h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
