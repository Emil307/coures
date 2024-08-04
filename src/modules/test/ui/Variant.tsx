import { IQuestion, IVariant } from "@/shared";
import React from "react";

interface IVariantProps {
  variant: IVariant;
  question: IQuestion;
}

export const Variant: React.FC<IVariantProps> = ({ variant, question }) => {
  return (
    <div>
      {question.type === "single" && (
        <div className="flex items-center gap-4">
          <input type="radio" />
          <h6 className="text-lg font-normal">{variant.value}</h6>
        </div>
      )}
      {question.type === "multi" && (
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          <h6 className="text-lg font-normal">{variant.value}</h6>
        </div>
      )}
      {question.type === "input" && (
        <div className="flex items-center gap-4">
          <input type="textaria" />
          <h6 className="text-lg font-normal">{variant.value}</h6>
        </div>
      )}
    </div>
  );
};
