import { useContext } from "react";
import { ColorModeContext } from "../../../context/DarkModeContext";

export default function DarkModeSwitch() {
  const colorMode = useContext(ColorModeContext);
  const mode = colorMode.mode; // 'dark' or 'light', adapt if your context stores differently

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={colorMode.toggleColorMode}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#23272a] hover:bg-[#18191c] transition border border-[#36393f] focus:outline-none focus:ring-2 focus:ring-[#5865f2]"
    >
      {mode === "dark" ? (
        <>
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-yellow-300">
            <path
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.09 9.79z"
              strokeWidth={2}
            />
          </svg>
          <span className="text-white font-semibold">Dark mode</span>
        </>
      ) : (
        <>
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-blue-400">
            <circle cx="12" cy="12" r="6" strokeWidth={2} />
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 6.95l-1.414-1.414M6.36 6.36L4.95 4.95m12.02 0l-1.414 1.414M6.36 17.64l-1.414 1.414" strokeWidth={2}/>
          </svg>
          <span className="text-white font-semibold">Light mode</span>
        </>
      )}
      <span
        className={`ml-auto w-12 h-6 bg-[#393943] rounded-full flex items-center px-1 transition ${
          mode === "dark" ? "justify-start" : "justify-end"
        }`}
      >
        <span
          className={`block w-5 h-5 rounded-full bg-white shadow-lg transition-transform duration-200 ${
            mode === "dark" ? "" : "translate-x-6"
          }`}
        />
      </span>
    </button>
  );
}
