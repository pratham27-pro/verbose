import { useRef, useEffect, useCallback } from "react";
// import classNames from "classnames";

export default function Scroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [scrollToBottom, children]);

  return (
    <div
      ref={scrollRef}
      className={
        "overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-[#393943] scrollbar-track-[#23272a]/80"
      }
      style={{
        maxHeight: "calc(100vh - 200px)",
      }}
    >
      {children}
    </div>
  );
}
