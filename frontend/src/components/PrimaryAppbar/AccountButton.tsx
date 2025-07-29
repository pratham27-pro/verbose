import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import DarkModeSwitch from "./DarkMode/DarkModeSwitch";
import { useNavigate } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function AccountButton() {
  const navigate = useNavigate();

  // Placeholder: handle actual actions (logout, etc.) as needed.
  const handleLogout = () => {
    // TODO: implement logout logic
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center rounded-full focus:outline-none focus:ring-2 focus:ring-[#5865f2] hover:bg-[#393943] bg-transparent transition" aria-label="Account">
        <UserCircleIcon className="w-8 h-8 text-white" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-150"
        enterFrom="opacity-0 scale-95 -translate-y-2"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-2"
      >
        <Menu.Items className="absolute right-0 mt-3 w-64 origin-top-right bg-[#23272a] border border-[#36393f] divide-y divide-[#36393f] shadow-xl rounded-xl z-50 focus:outline-none">
          {/* Profile item */}
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    "w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                    active ? "bg-[#393943] text-white" : "text-[#ececec]"
                  )}
                  onClick={() => navigate("/profile")}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={2} fill="none"/>
                  </svg>
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    "w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                    active ? "bg-[#393943] text-white" : "text-[#ececec]"
                  )}
                  onClick={() => navigate("/settings")}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor">
                    <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" strokeWidth={2}/>
                    <path d="M19.4 15a1.7 1.7 0 01-.4 2L17 19.4a1.7 1.7 0 01-2 .4l-1.3-.5a6.9 6.9 0 01-2.2 0l-1.3.5a1.7 1.7 0 01-2-.4L4.6 17a1.7 1.7 0 01-.4-2l.5-1.3a6.9 6.9 0 010-2.2L4.2 10.3a1.7 1.7 0 01.4-2L7 4.6a1.7 1.7 0 012-.4l1.3.5a6.9 6.9 0 012.2 0l1.3-.5a1.7 1.7 0 012 .4l2.4 2.4a1.7 1.7 0 01.4 2l-.5 1.3a6.9 6.9 0 010 2.2l.5 1.3z" strokeWidth={2}/>
                  </svg>
                  Settings
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={classNames(
                    "w-full flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium",
                    active ? "bg-[#393943] text-white" : "text-[#ff7b7b]"
                  )}
                  onClick={handleLogout}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor">
                    <path d="M15 12H3m12 0l-4-4m4 4l-4 4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
          {/* Divider and Dark Mode Switch as extra item */}
          <div className="px-2 py-2">
            <DarkModeSwitch />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
