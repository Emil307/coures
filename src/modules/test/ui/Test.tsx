import React from "react";

export const Test: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl">Пришло время закрепить изученный материал!</h3>
        <h3 className="text-2xl font-normal">
          Пройдите тест, чтобы перейти к следующему уроку
        </h3>
      </div>
    </div>
  );
};
