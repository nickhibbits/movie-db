import { Props } from "$/types/props";
import { GlobalState } from "$/types/state";
import { useLocalStorage } from "$/utils/localStorage";
import { createContext, useContext } from "react";

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
