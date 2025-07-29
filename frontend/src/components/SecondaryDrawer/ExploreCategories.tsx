import { useEffect } from "react";
import useCrud from "../../hooks/useCrud";
import { Link } from "react-router-dom";
import { MEDIA_URL } from "../../config";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export default function ExploreCategories() {
  const { dataCRUD, fetchData } = useCrud<Category>([], "/server/category/");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <nav>
      <div className="h-12 flex items-center px-4 border-b border-[#36393f] bg-[#23272a] sticky top-0 z-20 text-white font-bold text-lg tracking-tight select-none">
        Explore
      </div>
      <ul className="py-1 space-y-1">
        {dataCRUD.map((item) => (
          <li key={item.id}>
            <Link
              to={`/explore/${item.name}`}
              className="flex items-center gap-3 p-2 pl-4 rounded-lg transition text-[#ececec] hover:bg-[#393943] hover:text-white focus:bg-[#393943] focus:outline-none"
            >
              <img
                src={`${MEDIA_URL}${item.icon}`}
                alt="Category Icon"
                className="w-7 h-7 min-w-7 min-h-7 rounded object-cover bg-[#23272a] border border-[#36393f] shadow-sm"
                draggable={false}
              />
              <span className="text-base font-semibold truncate pl-1">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
