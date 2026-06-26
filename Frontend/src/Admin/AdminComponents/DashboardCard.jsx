import React from "react";

const DashboardCard = ({ title, value, change, icon }) => {
  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-3xl
      p-6
      hover:border-orange-500
      transition-all
      duration-300
      shadow-lg
      "
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-slate-400">{title}</p>

          <h2 className="text-4xl font-bold text-white mt-3">{value}</h2>

          <p className="text-green-400 mt-3">{change}</p>
        </div>

        <div
          className="
          w-16
          h-16
          rounded-2xl
          bg-gradient-to-r
          from-orange-500
          to-amber-500
          flex
          items-center
          justify-center
          text-white
          text-3xl
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
