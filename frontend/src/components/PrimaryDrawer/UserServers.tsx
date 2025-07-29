import { MEDIA_URL } from "../../config";
import { Link } from "react-router-dom";

interface Server {
  id: number;
  name: string;
  category: string;
  icon: string;
}

type Props = {
  open: boolean;
  data: Server[];
};

export default function UserServers({ open, data }: Props) {
  return (
    <div>
      <div className="h-12 flex items-center px-4">
        {open && (
          <span className="text-xs uppercase tracking-widest text-[#8b949e] font-semibold">
            Servers
          </span>
        )}
      </div>
      <ul className="space-y-1">
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={`/server/${item.id}`}
              className="
                flex items-center gap-3 p-2 pl-3 rounded-lg transition
                text-[#ececec]
                hover:bg-[#393943] hover:text-white
                focus:bg-[#393943] focus:outline-none
              "
            >
              {/* Server Icon */}
              <img
                src={MEDIA_URL + item.icon}
                alt="Server Icon"
                className="w-9 h-9 min-w-9 min-h-9 rounded-full object-cover bg-[#23272a] border border-[#36393f] shadow-sm"
              />
              {/* Server Name/Category */}
              <div
                className={`
                  flex flex-col
                  transition-opacity duration-200
                  ${open ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}
                `}
                style={{ minWidth: 0 }}
              >
                <span className="text-sm font-bold truncate">
                  {item.name}
                </span>
                <span className="text-xs text-[#a3a6ab] truncate">
                  {item.category}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
