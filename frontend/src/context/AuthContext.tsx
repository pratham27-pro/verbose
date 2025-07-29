import React, { createContext } from "react";
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


export default AuthServiceProvider;