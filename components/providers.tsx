"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext({});

export function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
