import { Props } from "$/types/props";
import { UseFavorites, useFavorites } from "$/utils/customHooks/useFavorites";
import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext<UseFavorites | undefined>(undefined!);
// export const AppContext = createContext({favorites, setFavorites}: {favorites, setFavortes} as AppState);

export function AppWrapper({ children }: Props) {
  const [favorites, setFavortites] = useFavorites();

  return (
    <AppContext.Provider value={[favorites, setFavortites]}>
      {children}
    </AppContext.Provider>
  );
}

export function useFavoritesContext() {
  return React.useContext(AppContext);
}
