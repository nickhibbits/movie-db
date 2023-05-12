import { Props } from "$/types/props";
import React, { createContext, useReducer } from "react";

type Action = {
  type: string;
  id?: string;
  index?: number;
};

type GlobalState = {
  favorites: (string | undefined)[];
};

const ACTIONS = {
  ADD_FAVORITE: "toggle-favorite",
  REMOVE_FAVORITE: "remove-favorite",
};

export function addFavorite(id: string): Action {
  return {
    type: ACTIONS.ADD_FAVORITE,
    id,
  };
}

export function removeFavorite(index: number): Action {
  return {
    type: ACTIONS.REMOVE_FAVORITE,
    index,
  };
}

const initialState: GlobalState = {
  favorites: [],
};

const reducer = (state: GlobalState, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      return {
        favorites: [
          ...state.favorites.slice(0, action.index),
          action.id,
          ...state.favorites.slice(action.index),
        ],
      };
    case ACTIONS.REMOVE_FAVORITE:
      return {
        favorites: [
          ...state.favorites.slice(0, action.index),
          ...state.favorites.slice(action.index && action.index + 1),
        ],
      };
    default:
      return state;
  }
};

export const AppContext = createContext<any>(initialState);

export function AppContextWrapper({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useFavoritesContext() {
  return React.useContext(AppContext);
}
