import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useBlockStore, getBlocks, BlockCard } from "@/modules/block";
import { ICourse } from "@/shared";
import { Skeleton } from "@/shared";

interface IBlocksList {
  courseId: number;
}

export const BlocksList: React.FC<IBlocksList> = ({ courseId }) => {
  const blocks = useBlockStore((state) => state.blocks);
  const setBlocks = useBlockStore((state) => state.setBlocks);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    handleGetBlocks();
  }, []);

  function handleGetBlocks() {
    setIsLoading(true);
    getBlocks(courseId)
      .then((res) => {
        setBlocks(res.data);
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
    <div className="flex w-full flex-col gap-4">
      {isLoading && (
        <>
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
          <Skeleton width={"w-full"} height="h-16" bg="bg-white" />
        </>
      )}
      {!isLoading &&
        blocks &&
        blocks.map((block: ICourse) => (
          <BlockCard block={block} key={block.id} />
        ))}
    </div>
  );
};
