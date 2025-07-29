// Replaces MUI + old CSS with shadcn/ui + Tailwind

import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { MEDIA_URL } from "../../config";
import useCrud from "../../hooks/useCrud";

interface Server {
  id: number;
  name: string;
  description: string;
  icon: string;
  category: string;
  banner: string;
}

export default function ExploreServers() {
  const { categoryName } = useParams();
  const url = categoryName
    ? `/server/select/?category=${categoryName}`
    : "/server/select";
  const { dataCRUD, fetchData } = useCrud<Server>([], url);

  useEffect(() => {
    fetchData();
  }, [categoryName]);

  return (
    <div className="max-w-7xl mx-auto pt-10 pb-4 px-4 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight capitalize mb-2">
        {categoryName || "Popular Channels"}
      </h1>
      <p className="text-lg text-muted-foreground font-medium mb-8">
        {categoryName
          ? `Channels talking about ${categoryName}`
          : "Check out some of our popular channels"}
      </p>

      <h2 className="font-semibold text-lg text-muted-foreground mb-3">
        Recommended Channels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dataCRUD.map((item) => (
          <Link
            key={item.id}
            to={`/server/${item.id}`}
            className="bg-[#23272A] rounded-lg overflow-hidden shadow transition hover:scale-[1.04] hover:shadow-lg  border border-[#37393F]/40 cursor-pointer flex flex-col"
          >
            <div className="h-32 w-full bg-black relative">
              <img
                src={item.banner ? MEDIA_URL + item.banner : `https://source.unsplash.com/random/800x200/?chat,discord,${item.name}`}
                alt={`${item.name} banner`}
                className="h-full w-full object-cover opacity-70"
                loading="lazy"
              />
              <div className="absolute bottom-[-22px] left-6">
                <img
                  src={MEDIA_URL + item.icon}
                  alt="Server icon"
                  className="w-14 h-14 rounded-full border-4 border-[#23272A] shadow-lg bg-[#18191C] object-cover"
                />
              </div>
            </div>
            <div className="flex-1 pt-8 pb-4 px-6">
              <div className="font-bold text-white text-lg truncate">{item.name}</div>
              <div className="text-muted-foreground text-sm mb-2">
                {item.category}
              </div>
              <div className="line-clamp-2 text-muted-foreground text-xs">
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
