import { createContext, useContext, useState } from "react";
import type { User } from "../types/user";
import { loginRequest } from "./auth.api";
import type { LoginPayload } from "../types/auth";

//global state

interface AuthContextType {
  user: User | null;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (payload: LoginPayload) => {
    const res = await loginRequest(payload);

    localStorage.setItem("token", res.token);
    setUser(res.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("Missing AuthContext");
  return ctx;
}
