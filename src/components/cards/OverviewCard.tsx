"use client";

import React from "react";

interface OverViewCardProps {
  label: string;
  value: string;
  percent: string;
}

const OverviewCard: React.FC<OverViewCardProps> = ({
  label,
  value,
  percent,
}) => {
  return (
    <div className="h-40 flex flex-col space-y-2 p-5 mt-3 w-54 rounded-md bg-[#F0F5F2] ">
      <div className="text-[13px] font-semibold ">{label}</div>
      <div className="text-xl font-bold">{value} </div>
      <div className="text-[12px] font-semibold text-[#007A54]">
        {Number(percent) > 0 ? (
          <div className=" text-[#007A54]">+{percent}% increase</div>
        ) : (
          <div className="text-red-600"> {percent}% decrease</div>
        )}
      </div>
    </div>
  );
};

export default OverviewCard;
