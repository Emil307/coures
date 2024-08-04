import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "@/assets/icons/back-arrow.svg";

export const LessonHeader: React.FC = () => {
  return (
    <div className="w-full h-24 flex justify-between items-center p-8">
      <Link to="/home" className="text-2xl font-bold">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md transition-transform hover:scale-105">
          <BackArrow
            width={30}
            height={30}
            className="transition-transform hover:scale-105"
          />
        </button>
      </Link>
    </div>
  );
};
