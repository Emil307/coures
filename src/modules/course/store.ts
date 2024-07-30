import { create } from 'zustand';
import { ICourse } from '@/shared';

interface ICourseState {
  courses: ICourse[];
  setCourses: (courses: ICourse[]) => void;
}

export const useCourseStore = create<ICourseState>((set) => ({
  courses: [],
  setCourses: (courses: ICourse[]) => set(() => ({ courses })),
}));
