import { create } from "zustand";
import { IBlock } from "@/shared";

interface IBlocksState {
  blocks: IBlock[];
  setBlocks: (blocks: IBlock[]) => void;
}

export const useBlockStore = create<IBlocksState>((set) => ({
  blocks: [],
  setBlocks: (blocks: IBlock[]) => set(() => ({ blocks })),
}));
