import { useState, ReactNode, createContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: ReactNode;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
export const UserContext = createContext({} as UserContextType);

//managing the authentication state for the user
export default function UserContextProvider({
  children,
}: UserContextProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
