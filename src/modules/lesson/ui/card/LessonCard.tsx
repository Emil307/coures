import React from "react";
import { ILesson } from "@/shared";
import { Link } from "react-router-dom";

interface ILessonCardProps {
  lesson: ILesson;
}

export const LessonCard: React.FC<ILessonCardProps> = ({ lesson }) => {
  return (
    <Link to={`/lesson/${lesson.id}`}>
      <div className="flex items-center h-14">{lesson.title}</div>
    </Link>
  );
};
