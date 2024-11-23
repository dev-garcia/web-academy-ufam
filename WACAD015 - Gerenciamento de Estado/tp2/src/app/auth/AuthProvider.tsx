"use client";

import { useRouter } from "next/navigation";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextProps {
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setEmail(storedUser);
    }
  }, []);

  const login = (userEmail: string) => {
    setEmail(userEmail);
    localStorage.setItem("user", userEmail);
    router.push("/");
  };

  const logout = () => {
    setEmail(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
