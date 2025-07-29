import type { AuthServiceProps } from "@/@types/auth-service";
import { createContext, useContext } from "react";

const AuthServiceContext = createContext<AuthServiceProps | null>(null);

export function useAuthServiceContext(): AuthServiceProps {
  const context = useContext(AuthServiceContext);

  if (context === null) {
    throw new Error("Error - You have to use the AuthServiceProvider");
  }
  return context;
}