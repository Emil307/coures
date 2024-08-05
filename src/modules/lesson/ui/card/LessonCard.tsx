import React from "react";
import { ILesson } from "@/shared";
import { Link } from "react-router-dom";

interface ILessonCardProps {
  lesson: ILesson;
}

export const LessonCard: React.FC<ILessonCardProps> = ({ lesson }) => {
  return (
    <Link to={`/lesson/${lesson.id}`}>
      <div className="flex items-center h-12 pl-4 rounded-lg bg-white shadow-md">
        <h5 className="text-lg">{lesson.title}</h5>
      </div>
    </Link>
  );
};
