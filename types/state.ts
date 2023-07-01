import { Dispatch, SetStateAction } from "react";

export type Favorites = (string | undefined)[];

export type User = {
  id: string;
  password: string;
  username: string;
};

export type GlobalState = {
  favorites: Favorites;
  setFavorites: Dispatch<SetStateAction<Favorites>> | null;
  user: User | {};
  setUser: Dispatch<SetStateAction<User | {}>> | null;
};
