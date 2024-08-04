import React from "react";
import { IBlock } from "@/shared/api/types";
import { Link } from "react-router-dom";

interface IBlockCardProps {
  block: IBlock;
}

export const BlockCard: React.FC<IBlockCardProps> = ({ block }) => {
  return (
    <Link to="/courses">
      <div className="flex items-center h-14 pl-6 rounded-md bg-white shadow-md">
        <h4 className="text-xl">{block.title}</h4>
      </div>
    </Link>
  );
};
