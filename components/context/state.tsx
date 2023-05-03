import { Props } from "$/types/props";
import { UseFavorites, useFavorites } from "$/utils/customHooks/useFavorites";
import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext<UseFavorites | undefined>(undefined);
// export const AppContext = createContext({favorites, setFavorites}: {favorites, setFavortes} as AppState);

// TODO
// rename to FavoritesWrapper
// wrap only relevant pages, /[titleId] and /favorites

export function AppWrapper({ children }: Props) {
  const { favorites, setFavorites } = useFavorites();
  // const setFavoritesTyped = setFavorites as React.Dispatch<React.SetStateAction<string[]>>;

  return (
    <AppContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </AppContext.Provider>
  );
}

export function useFavoritesContext() {
  return React.useContext(AppContext);
}
