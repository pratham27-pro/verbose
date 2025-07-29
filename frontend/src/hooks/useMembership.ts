import type { IuseServer } from "@/context/MemberContext";
import { createContext, useContext } from "react";


const MembershipContext = createContext<IuseServer | null>(null);

export function useMembershipContext(): IuseServer {
  const context = useContext(MembershipContext);

  if (context === null) {
    throw new Error("Error - You have to use the MembershipProvider");
  }
  return context;
}
