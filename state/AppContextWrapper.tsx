import { Props } from "$/types/props";
import { Favorites, GlobalState, User } from "$/types/state";
import React, { createContext, useState } from "react";

const initialState: GlobalState = {
  favorites: [],
  setFavorites: null,
  user: {},
  setUser: null,
};

export const AppContext = createContext<GlobalState>(initialState);

export function AppContextWrapper({ children }: Props) {
  // set default favorites based on db tracking user activity between sessions
  const [favorites, setFavorites] = useState<Favorites>([]);
  const [user, setUser] = useState<User | {}>({});

  return (
    <AppContext.Provider value={{ favorites, setFavorites, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useFavorites() {
  const { favorites, setFavorites } = React.useContext(AppContext);

  return { favorites, setFavorites };
}

export function useAuth() {
  const { user, setUser } = React.useContext(AppContext);

  return { user, setUser };
}
