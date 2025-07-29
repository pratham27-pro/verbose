import { Link, useParams } from "react-router-dom";
import type { Server } from "../../@types/server.d.ts";

interface ServerChannelsProps {
  data: Server[];
}

export default function ServerChannels({ data }: ServerChannelsProps) {
  const { serverId, channelId } = useParams();
  const server_name = data?.[0]?.name ?? "Server";

  return (
    <nav>
      <div className="h-12 flex items-center px-4 border-b border-[#36393f] bg-[#23272a] sticky top-0 z-20 text-white font-bold text-base tracking-tight select-none overflow-hidden">
        <span className="truncate">{server_name}</span>
      </div>
      <ul>
        {data.flatMap((obj) =>
          obj.channel_server.map((channel) => (
            <li key={channel.id}>
              <Link
                to={`/server/${serverId}/${channel.id}`}
                className={`
                  flex items-center p-2 px-6 rounded-md transition
                  text-[#ececec]
                  font-semibold
                  hover:bg-[#393943] hover:text-white
                  focus:bg-[#393943] focus:outline-none
                  ${String(channelId) === String(channel.id) ? "bg-[#393943] text-white" : ""}
                `}
              >
                <span className="truncate">{channel.name}</span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </nav>
  );
}
