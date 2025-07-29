import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SecondaryDraw({ children }: Props) {
  // Secondary sidebar width consistent with your theme
  const width = 280; // customize accordingly

  return (
    <aside
      className="hidden sm:flex flex-col border-r border-[#36393f] bg-[#2b2d31] overflow-auto"
      style={{
        width,
        height: "calc(100vh - 56px)", // match primaryAppBar height
        marginTop: "56px",
      }}
    >
      {children}
    </aside>
  );
}
