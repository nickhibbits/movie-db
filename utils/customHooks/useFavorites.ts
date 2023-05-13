import { useEffect, useState } from "react";

export type UseFavorites = {
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
};

export const _useFavorites = (newFavoriteId?: string): UseFavorites => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    newFavoriteId &&
      setFavorites((currentFavorites) => {
        return [...currentFavorites, newFavoriteId];
      });
  }, [newFavoriteId]);

  return { favorites, setFavorites };
};
