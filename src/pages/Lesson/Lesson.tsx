import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLessonById } from "@/modules/lesson";
import toast from "react-hot-toast";
import { ILesson } from "@/shared";
import { LessonHeader } from "@/widgets";

export const Lesson: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(false);
  const [lesson, setLesson] = useState<ILesson | null>(null);

  useEffect(() => {
    handleGetLeson(Number(id));
  }, []);

  function handleGetLeson(id: number) {
    setIsloading(true);
    getLessonById(id)
      .then((res) => {
        setLesson(res.data);
      })
      .catch((e) => {
        toast.error(
          e.response.data.detail.msg ||
            "Упс... кажется, что-то сломалось :( Мы уже работаем над этим"
        );
      })
      .finally(() => {
        setIsloading(false);
      });
  }

  return (
    <>
      <LessonHeader />
      {isLoading && <>Loading...</>}
      {lesson && (
        <div className="pt-12 flex justify-center w-4/5 m-auto">
          <iframe
            width="800"
            height="480"
            src="https://player.vimeo.com/video/994701694?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="aso"
            allowFullScreen
          ></iframe>
          <h2>{lesson.title}</h2>
        </div>
      )}
    </>
  );
};
