import React, { createContext, useContext } from "react";
import type { AuthServiceProps } from "../@types/auth-service";
import { useAuthService } from "../services/AuthServices";

const AuthServiceContext = createContext<AuthServiceProps | null>(null);

export function AuthServiceProvider(props: React.PropsWithChildren) {
  const authServices = useAuthService();
  return (
    <AuthServiceContext.Provider value={authServices}>
      {props.children}
    </AuthServiceContext.Provider>
  );
}
// FIXME: Move this useAuth to the hooks folder in a separate file
export function useAuthServiceContext(): AuthServiceProps {
  const context = useContext(AuthServiceContext);

  if (context === null) {
    throw new Error("Error - You have to use the AuthServiceProvider");
  }
  return context;
}

export default AuthServiceProvider;