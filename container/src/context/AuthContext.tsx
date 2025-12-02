import type { ReactNode } from "react";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface VerifyResponse {
  valid: boolean;
  user?: {
    username: string;
    email: string;
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // Store only token in localStorage
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function verify() {
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const res = await axios.post<VerifyResponse>(
          "http://127.0.0.1:3001/verify",
          { token },
        );

        if (res.data.valid && res.data.user) {
          setUser({
            username: res.data.user.username,
            email: res.data.user.email,
          });
        } else {
          logout();
        }
      } catch {
        logout();
      }
    }

    verify();
  }, [token]);

  function login(token: string, user: User) {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token); // only token is stored
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}
