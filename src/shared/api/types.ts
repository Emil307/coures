import { StringLiteral } from "typescript";

export interface ILesson {
  id: number;
  title: string;
  text: string;
  video: string;
}

export interface IBlock {
  id: number;
  title: string;
  description: string;
  previewImage: string;
}

export interface ICourse {
  id: number;
  title: string;
  description: string;
  previewImage: string;
  previewVideo: string;
  blocks: IBlock[];
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  courses?: ICourse[];
}

export interface IVariant {
  id: number;
  value: string;
}

export interface IQuestion {
  id: number;
  question: string;
  type: "single" | "multi" | "input";
  isСustomAvailable: boolean;
  variants: IVariant[];
}

export interface ITest {
  id: number;
  title: string;
  questions: IQuestion[];
}
