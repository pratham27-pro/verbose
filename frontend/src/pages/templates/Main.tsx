import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <main
      className="flex-grow overflow-hidden"
      style={{
        marginTop: "56px", // default app bar height (adjust if different)
        height: "calc(100vh - 56px)",
      }}
    >
      {children}
    </main>
  );
}
