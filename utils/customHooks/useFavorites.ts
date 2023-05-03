import { useEffect, useState } from "react";

export type UseFavorites = [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>
];

export const useFavorites = (newFavoriteId?: string): UseFavorites => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    newFavoriteId &&
      setFavorites((currentFavorites) => {
        return [...currentFavorites, newFavoriteId];
      });
  }, [newFavoriteId]);

  return [favorites, setFavorites];
};
