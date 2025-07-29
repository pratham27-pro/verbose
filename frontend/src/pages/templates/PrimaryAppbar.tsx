import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import AccountButton from "../../components/PrimaryAppbar/AccountButton";

export default function PrimaryAppBar() {
  const [sideMenu, setSideMenu] = useState(false);
  // Use window width listener or a media query hook for "sm" breakpoint (640px)
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth < 640
  );

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 640);
      if (window.innerWidth >= 640) setSideMenu(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#2b2d31] border-b border-[#36393f] flex items-center px-4">
        {isSmallScreen && (
          <button
            aria-label="Open menu"
            onClick={() => setSideMenu(true)}
            className="mr-3 p-1 rounded hover:bg-[#393943] focus:outline-none focus:ring-2 focus:ring-[#5865f2]"
          >
            <Bars3Icon className="w-6 h-6 text-white" />
          </button>
        )}
        <Link to="/" className="text-white font-extrabold text-lg tracking-tight select-none">
          DJCHAT
        </Link>
        <div className="flex-grow" />
        <AccountButton />
      </header>

      {/* Overlay menu drawer on small screens */}
      {isSmallScreen && sideMenu && (
        <aside
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setSideMenu(false)}
        >
          <nav
            className="absolute left-0 top-0 bottom-0 w-64 bg-[#23272a] border-r border-[#36393f] p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Render your <ExploreCategories /> or equivalent here */}
            <div className="text-white font-semibold mb-4 select-none">Explore</div>
            {/* You can place <ExploreCategories /> here in your app or pass as prop */}
          </nav>
        </aside>
      )}
    </>
  );
}
