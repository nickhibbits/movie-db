import { Dispatch, SetStateAction } from "react";

export type Favorites = (string | undefined)[];

export type User = {
  id: string;
  password: string;
  username: string;
};

export type GlobalState = {
  user: User | null;
  setUser: (value: any) => void;
  clearUser: () => void;
};
