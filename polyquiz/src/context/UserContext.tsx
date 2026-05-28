import { createContext, useState, ReactNode } from "react";

type UserContextType = {
  user: string | null;
  setUser: (value: string | null) => void;
  bestScore: number;
  setBestScore: (value: number) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

type Props = {
  children: ReactNode;
};

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<string | null>(null);
  const [bestScore, setBestScore] = useState<number>(0);

  return (
    <UserContext.Provider value={{ user, setUser, bestScore, setBestScore }}>
      {children}
    </UserContext.Provider>
  );
}