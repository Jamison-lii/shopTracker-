"use client";

import React, { useState } from "react";

type Promotion = {
  id: number;
  title: string;
  description: string;
  duration: string;
  rule: string;
  state: "Active" | "Triggered" | "Deactivated";
};

const initialPromotions: Promotion[] = [
  {
    id: 1,
    title: "Buy One Get One Free",
    description: "Applies to all beverages in the cafe section.",
    duration: "Oct 1 - Oct 15, 2025",
    rule: "Valid for purchases above 2000 FCFA.",
    state: "Triggered",
  },
   {
    id: 4,
    title: "Buy One Get One Free",
    description: "Applies to all beverages in the cafe section.",
    duration: "Oct 1 - Oct 15, 2025",
    rule: "Valid for purchases above 2000 FCFA.",
    state: "Triggered",
  },
  {
    id: 2,
    title: "Weekend Discount",
    description: "Flat 20% off on all electronics.",
    duration: "Every Saturday & Sunday in October",
    rule: "Excludes items already on sale.",
    state: "Active",
  },
  {
    id: 3,
    title: "Old Promo",
    description: "Expired shoe sale.",
    duration: "Sep 1 - Sep 15, 2025",
    rule: "No longer valid.",
    state: "Deactivated",
  },
];

function PromotionsList() {
  const [promotions, setPromotions] = useState<Promotion[]>(initialPromotions);
  const [activeTab, setActiveTab] = useState<"Active" | "Triggered" | "Deactivated">("Active");

  // Handle state change
  const handleChangeState = (id: number, newState: Promotion["state"]) => {
    setPromotions((prev) =>
      prev.map((promo) =>
        promo.id === id ? { ...promo, state: newState } : promo
      )
    );
  };

  // Tab filter
  const filteredPromos = promotions.filter((p) => p.state === activeTab);

  return (
    <div className="p-4">
        <div className="text-xl pb-3 font-semibold">Promotions</div>
      {/* Tabs */}
      <div className="flex  mb-4">
        {["Active", "Triggered", "Deactivated"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 text-xl font-medium border-b-2 transition ${
              activeTab === tab
                ? "border-green-600 text-green-700"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      {filteredPromos.length === 0 ? (
        <p className="text-gray-500 text-sm">No promotions in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredPromos.map((promo) => (
            <div
              key={promo.id}
              className="rounded-md border border-gray-200 shadow-sm hover:shadow-md transition p-4 bg-white flex flex-col justify-between"
            >
              {/* Tag */}
              <span
                className={`self-start px-2 py-1 text-xs font-semibold rounded-sm ${
                  promo.state === "Active"
                    ? "bg-green-100 text-green-700"
                    : promo.state === "Triggered"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {promo.state}
              </span>

              {/* Content */}
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {promo.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{promo.description}</p>
                <div className="mt-3 text-sm">
                  <p className="text-gray-500">
                    <span className="font-medium text-gray-800">Duration:</span>{" "}
                    {promo.duration}
                  </p>
                  <p className="text-gray-500 mt-1">
                    <span className="font-medium text-gray-800">Rule:</span>{" "}
                    {promo.rule}
                  </p>
                </div>
              </div>

              {/* State Change Button */}
              <div className="mt-4">
                {promo.state === "Triggered" && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleChangeState(promo.id, "Active")}
                      className="px-3 py-1 text-sm rounded-sm bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      Activate
                    </button>
                    <button
                      onClick={() => handleChangeState(promo.id, "Deactivated")}
                      className="px-3 py-1 text-sm rounded-sm bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Deactivate
                    </button>
                  </div>
                )}
                {promo.state === "Active" && (
                  <button
                    onClick={() => handleChangeState(promo.id, "Deactivated")}
                    className="px-3 py-1 text-sm rounded-sm bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Deactivate
                  </button>
                )}
                {promo.state === "Deactivated" && (
                  <button
                    onClick={() => handleChangeState(promo.id, "Active")}
                    className="px-3 py-1 text-sm rounded-sm bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    Reactivate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PromotionsList;
