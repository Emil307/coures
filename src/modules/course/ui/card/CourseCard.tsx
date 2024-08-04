import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { ICourse } from "@/shared/api/types";
import { Card } from "@/shared";
import emptyImg from "@/assets/images/empty-content.jpg";
import { DrawerWidget } from "@/widgets";
import { BlocksList } from "@/modules/block";

interface ICourseCardProps {
  course: ICourse;
}

export const CourseCard: React.FC<ICourseCardProps> = ({ course }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className="w-full h-full rounded-2xl transition-transform hover:scale-105 shadow-2xl"
        onClick={onOpen}
      >
        <Card>
          <div className="flex flex-col gap-3">
            <img
              src={course.previewImage ? course.previewImage : emptyImg}
              alt={course.title}
            />
            <h4 className="text-xl">{course.title}</h4>
          </div>
        </Card>
      </button>
      <DrawerWidget
        title={course.title}
        placement="right"
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <BlocksList courseId={course.id} />
      </DrawerWidget>
    </>
  );
};
