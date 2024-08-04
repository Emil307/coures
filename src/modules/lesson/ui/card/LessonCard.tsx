import React from "react";
import { ILesson } from "@/shared";

interface ILessonCardProps {
  lesson: ILesson;
}

export const LessonCard: React.FC<ILessonCardProps> = ({ lesson }) => {
  return (
    <>
      <div className="flex items-center h-14">{lesson.title}</div>
    </>
  );
};
