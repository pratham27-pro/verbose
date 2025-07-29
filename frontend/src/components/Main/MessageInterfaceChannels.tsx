import { useParams } from "react-router-dom";
import { MEDIA_URL } from "../../config";
import type { Server } from "../../@types/server.d";
import { useState } from "react";
import ServerChannels from "../SecondaryDrawer/ServerChannel";

interface ServerChannelProps {
  data: Server[];
}

export default function MessageInterfaceChannels({ data }: ServerChannelProps) {
  const { serverId, channelId } = useParams();
  const [sideMenu, setSideMenu] = useState(false);

  const channelName =
    data
      ?.find((server) => server.id === Number(serverId))
      ?.channel_server?.find((chan) => chan.id === Number(channelId))
      ?.name || "general";

  return (
    <>
      <header className="sticky top-0 bg-[#2b2d31]/80 backdrop-blur-md border-b border-[#2f3137] z-30">
        <div className="flex items-center min-h-[58px] gap-4 px-5">
          <div className="block sm:hidden">
            <img
              src={`${MEDIA_URL}${data?.[0]?.icon}`}
              alt="Server Icon"
              className="w-8 h-8 rounded-full border border-[#18191c] shadow"
            />
          </div>

          <h2 className="flex-1 font-semibold text-lg text-white truncate">
            #{channelName}
          </h2>

          <div className="flex-1" />
          <div className="mr-2">
            {/* Add your JoinServerButton here */}
          </div>
          {/* Small screens: menu button */}
          <button
            className="block sm:hidden p-2 rounded hover:bg-[#18191c]"
            onClick={() => setSideMenu(true)}
          >
            <svg width="24" height="24" fill="currentColor" className="text-white">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        {/* Slide-out drawer for channels */}
        {sideMenu && (
          <div
            className="fixed top-0 left-0 w-full h-full z-50 bg-black/30"
            onClick={() => setSideMenu(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#23272a] w-64 h-full shadow-lg p-3"
            >
              <button
                className="mb-4 text-right w-full text-muted-foreground hover:text-white"
                onClick={() => setSideMenu(false)}
              >
                Close
              </button>
              <ServerChannels data={data} />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
