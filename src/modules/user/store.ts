import { create } from 'zustand';
import { IUser } from '@/shared';

interface IUserState {
  user: IUser;
  resetEmail: string;
  passphrase: string;
  setUser: (user: IUser) => void;
  setResetEmail: (email: string) => void;
  setPassphrase: (passphrase: string) => void;
}

export const useUserStore = create<IUserState>((set) => ({
  user: {
    id: 0,
    email: '',
    name: '',
    surname: '',
    courses: [],
  },
  resetEmail: '',
  passphrase: '',
  setUser: (user: IUser) => set(() => ({
    user,
  })),
  setResetEmail: (email: string) => set(() => ({
    resetEmail: email,
  })),
  setPassphrase: (passphrase: string) => set(() => ({
    passphrase,
  })),
}));
