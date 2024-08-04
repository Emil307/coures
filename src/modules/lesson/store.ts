import { create } from "zustand";
import { ILesson } from "@/shared";

interface ILessonsState {
  lessons: ILesson[];
  setLessons: (lessons: ILesson[]) => void;
}

export const useLessonStore = create<ILessonsState>((set) => ({
  lessons: [],
  setLessons: (lessons: ILesson[]) => set(() => ({ lessons })),
}));
