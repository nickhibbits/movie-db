import { Props } from "$/types/props";
import React, { createContext, useReducer, useState } from "react";

const initialState: GlobalState = {
  // favorites: [],
  // setFavorites: null,
  // loggedIn: false,
  // setLoggedIn: null,
};

export const AppContext = createContext<GlobalState>(initialState);

export function AppContextWrapper({ children }: Props) {
  // set default favorites based on db tracking user activity between sessions
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
