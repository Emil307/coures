import React from "react";
import { Link } from "react-router-dom";

export const LessonHeader: React.FC = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center p-4">
      <Link to="/home" className="text-2xl font-bold">
        back
      </Link>
    </div>
  );
};
