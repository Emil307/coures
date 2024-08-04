import React, { useState } from "react";
import { IBlock } from "@/shared/api/types";
import { LessonsList } from "@/modules/lesson";

interface IBlockCardProps {
  block: IBlock;
}

export const BlockCard: React.FC<IBlockCardProps> = ({ block }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center h-14 pl-6 pr-6 rounded-md bg-white shadow-md">
          <h4 className="text-xl">{block.title}</h4>
        </div>
      </button>
      {isOpen && <LessonsList blockId={block.id} />}
    </>
  );
};