import { useContext } from "react";
import { AuthServiceContext } from "@/context/AuthContext"; 
import type { AuthServiceProps } from "@/@types/auth-service";

export function useAuthServiceContext(): AuthServiceProps {
  const context = useContext(AuthServiceContext);

  if (context === null) {
    throw new Error("Error - You have to use the AuthServiceProvider");
  }

  return context;
}
