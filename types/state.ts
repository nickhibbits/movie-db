type Action = {
  type: string;
  id?: string;
  index?: number;
};

type Auth = {
  loggedIn: boolean;
};

type Favorites = (string | undefined)[];

type GlobalState = {
  favorites: Favorites;
  auth: Auth;
};
