import { useState, useEffect, type ReactNode } from "react";
import DrawerToggle from "../../components/PrimaryDrawer/DrawToggle";

type Props = {
  children: ReactNode| ((open: boolean) => ReactNode);
};

export default function PrimaryDraw({ children }: Props) {
  const [open, setOpen] = useState(true);
  const [below600, setBelow600] = useState(window.innerWidth < 600);

  useEffect(() => {
    function onResize() {
      setBelow600(window.innerWidth < 600);
      setOpen(window.innerWidth >= 600);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Widths similar to MUI defaults, adjust as needed
  const widthOpen = 240;
  const widthClosed = 60;

  // const toggleOpen = () => setOpen((o) => !o);

  return (
    // Temporary drawer on small screens, fixed sidebar on bigger
    <>
      {/* Overlay drawer for small screens */}
      {below600 && open && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-60"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          fixed top-14 left-0 h-[calc(100vh-56px)] bg-[#2b2d31] border-r border-[#36393f] flex flex-col
          transition-all duration-300 ease-in-out
          ${open ? `w-[${widthOpen}px]` : `w-[${widthClosed}px]`}
          ${below600 ? "z-50" : "z-0"}
        `}
        style={{
          width: open ? widthOpen : widthClosed,
          transform: below600 && !open ? "translateX(-100%)" : "none",
        }}
      >
        {/* Drawer toggle toggle */}
        <div className="relative flex-shrink-0">
          <DrawerToggle
            open={open}
            handleDrawerClose={() => setOpen(false)}
            handleDrawerOpen={() => setOpen(true)}
          />
        </div>

        {/* Pass open prop to children if needed */}
        <div className="flex-1 overflow-auto">
          {/* We clone children to inject `open` prop if needed */}
          {typeof children === "function"
            ? children(open)
            : children}
        </div>
      </aside>
    </>
  );
}
