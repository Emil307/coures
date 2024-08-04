import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useLessonStore, getLessons, LessonCard } from "@/modules/lesson";
import { ILesson } from "@/shared";

interface ILessonsList {
  blockId: number;
}

export const LessonsList: React.FC<ILessonsList> = ({ blockId }) => {
  const lessons = useLessonStore((state) => state.lessons);
  const setLessons = useLessonStore((state) => state.setLessons);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    handleGetLessons();
  }, []);

  function handleGetLessons() {
    setIsLoading(true);
    getLessons(blockId)
      .then((res) => {
        setLessons(res.data);
      })
      .catch((e) => {
        toast.error(
          e.response.data.detail.msg ||
            "Упс... кажется, что-то сломалось :( Мы уже работаем над этим"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="flex flex-col pl-6 rounded-md bg-white shadow-md">
      {isLoading && <></>}
      {lessons &&
        lessons.map((lesson: ILesson) => (
          <LessonCard lesson={lesson} key={lesson.id} />
        ))}
    </div>
  );
};
