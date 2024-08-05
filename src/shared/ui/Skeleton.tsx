import React from "react";

interface ISkeletonProps {
  width: string;
  height: string;
  bg: string;
}

export const Skeleton: React.FC<ISkeletonProps> = ({ width, height, bg }) => {
  return (
    <div
      className={`animate-pulse rounded-lg ${width} ${height} ${bg} shadow-xl`}
    />
  );
};
