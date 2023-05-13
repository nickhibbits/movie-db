type Action = {
  type: string;
  id?: string;
  index?: number;
};

type Favorites = (string | undefined)[];

type GlobalState = {
  favorites?: Favorites;
  setFavorites?: any;
  loggedIn?: boolean;
  setLoggedIn?: any;
};
