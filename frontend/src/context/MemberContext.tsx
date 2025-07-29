import React, { createContext } from "react";
import useMembership from "../services/membershipService";

export interface IuseServer {
  joinServer: (serverId: number) => Promise<void>;
  leaveServer: (serverId: number) => Promise<void>;
  isMember: (serverId: number) => Promise<boolean>;
  isUserMember: boolean;
  error: Error | null;
  isLoading: boolean;
}

const MembershipContext = createContext<IuseServer | null>(null);

export default function MembershipProvider(props: React.PropsWithChildren) {
  const membership = useMembership();
  return (
    <MembershipContext.Provider value={membership}>
      {props.children}
    </MembershipContext.Provider>
  );
}

