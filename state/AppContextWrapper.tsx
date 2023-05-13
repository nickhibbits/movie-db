import { Props } from "$/types/props";
import React, { createContext, useReducer, useState } from "react";

const initialState: GlobalState = {
  favorites: [],
  auth: {
    loggedIn: false,
  },
};

export const AppContext = createContext<any>(initialState);

export function AppContextWrapper({ children }: Props) {
  const [favorites, setFavorites] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{ favorites, setFavorites, loggedIn, setLoggedIn }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useFavorites() {
  const { favorites, setFavorites } = React.useContext(AppContext);

  return { favorites, setFavorites };
}

export function useAuth() {
  const { loggedIn, setLoggedIn } = React.useContext(AppContext);

  return { loggedIn, setLoggedIn };
}
