import { useParams } from "react-router-dom";
// import { useTheme } from "next-themes"; // consider using this if you want a theme toggle
import Scroll from "./Scroll";
import MessageInterfaceChannels from "./MessageInterfaceChannels";
import useChatWebSocket from "../../services/chatService";
import type { Server } from "../../@types/server.d";

interface SendMessageData {
  type: string;
  message: string;
  [key: string]: any;
}
interface ServerChannelProps {
  data: Server[];
}
interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

export default function MessageInterface({ data }: ServerChannelProps) {
  const { serverId, channelId } = useParams();
  const { newMessage, message, setMessage, sendJsonMessage } =
    useChatWebSocket(channelId || "", serverId || "");

  const server_name = data?.[0]?.name ?? "Server";

  function formatTimeStamp(timestamp: string): string {
    const date = new Date(Date.parse(timestamp));
    return (
      date.toLocaleDateString() +
      " at " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) sendJsonMessage({ type: "message", message } as SendMessageData);
      setMessage("");
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) sendJsonMessage({ type: "message", message } as SendMessageData);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#23272a] dark text-white">
      <MessageInterfaceChannels data={data} />
      {!channelId ? (
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">{`Welcome to ${server_name}`}</h1>
            <p className="text-muted-foreground">
              {data?.[0]?.description ?? "This is our home"}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 flex flex-col">
            <Scroll>
              <ul className="flex flex-col space-y-4 px-4 pt-4 pb-2">
                {newMessage.map((msg: Message, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-neutral-800/80 shadow border border-neutral-700 flex items-center justify-center text-white text-lg font-bold">
                        {msg.sender[0]?.toUpperCase() || "?"}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{msg.sender}</span>
                        <span className="text-xs text-muted-foreground">{formatTimeStamp(msg.timestamp)}</span>
                      </div>
                      <div className="mt-1 bg-primary/5 text-white px-4 py-2 rounded-xl text-base shadow-sm min-w-0 break-words">
                        {msg.content}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Scroll>
          </div>
          <form
            className="bg-[#2b2d31]/90 px-3 py-2 flex items-end border-t border-[#121317]/70"
            onSubmit={onSubmit}
            autoComplete="off"
          >
            <textarea
              className="flex-1 bg-transparent min-h-[40px] max-h-[120px] resize-none text-white placeholder:text-[#767a81] focus:outline-none focus:ring-2 focus:ring-[#5865F2] rounded p-3 border border-[#393943]/90 transition"
              placeholder={`Message #${channelId || "general"} (Press Enter to send)`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onKeyDown}
              rows={1}
              required
            />
            {/* Optionally: Emoji picker, Send btn, Attachments */}
          </form>
        </>
      )}
    </div>
  );
}
