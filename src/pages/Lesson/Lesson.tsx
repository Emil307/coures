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
        <div className="w-fit max-w-4xl flex flex-col gap-4 pt-4 justify-center m-auto">
          <div>
            <h2 className="text-4xl text-left">{lesson.title}</h2>
            <p>{lesson.description}</p>
          </div>
          <iframe
            width="784"
            height="480"
            src="https://player.vimeo.com/video/994701694?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="aso"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  );
};