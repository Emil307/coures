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
