import { Props } from "$/types/props";
import { GlobalState, User } from "$/types/state";
import { useLocalStorage } from "$/utils/localStorage";
import { useRouter } from "next/router";
import { createContext, useEffect, useContext } from "react";

// export const userClean: User = {
//   id: "",
//   password: "",
//   username: "",
// };

export const AppContext = createContext<GlobalState>({
  user: null,
  setUser: () => {},
  clearUser: () => {},
});

export function AppContextWrapper({ children }: Props) {
  const [value, setValue, clearValue] = useLocalStorage("user", null);

  return (
    <AppContext.Provider
      value={{
        user: value,
        setUser: setValue,
        clearUser: clearValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAuth() {
  const { user, setUser, clearUser } = useContext(AppContext);
  return { user, setUser, clearUser };
}
