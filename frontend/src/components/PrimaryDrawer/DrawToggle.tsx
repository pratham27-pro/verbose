import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  open: boolean;
  handleDrawerClose: () => void;
  handleDrawerOpen: () => void;
};

export default function DrawerToggle({
  open,
  handleDrawerClose,
  handleDrawerOpen,
}: Props) {
  return (
    <div className="h-12 flex items-center justify-center">
      <button
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        className="
          p-2 rounded-full
          bg-[#23272a] text-[#a3a6ab]
          hover:bg-[#393943] hover:text-white
          transition
          shadow
          focus:outline-none focus:ring-2 focus:ring-[#5865f2]
        "
        aria-label={open ? "Close sidebar" : "Open sidebar"}
      >
        {open ? (
          <ChevronLeftIcon className="w-6 h-6" />
        ) : (
          <ChevronRightIcon className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
