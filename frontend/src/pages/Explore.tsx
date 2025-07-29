// Explore.tsx (or Home.tsx)
import PrimaryAppBar from "./templates/PrimaryAppbar";
import PrimaryDraw from "./templates/PrimaryDraw";
import SecondaryDraw from "./templates/SecondaryDraw";
import Main from "./templates/Main";
import PopularChannels from "../components/PrimaryDrawer/PopularChannels";
import ExploreCategories from "../components/SecondaryDrawer/ExploreCategories";
import ExploreServers from "../components/Main/ExploreServers";

export default function Explore() {
  return (
    <div className="flex min-h-screen bg-[#23272a]">
      <PrimaryAppBar />
      {/* Sidebar 1 */}
      <PrimaryDraw>
        <PopularChannels open={false} />
      </PrimaryDraw>
      {/* Sidebar 2 */}
      <SecondaryDraw>
        <ExploreCategories />
      </SecondaryDraw>
      {/* Main content */}
      <Main>
        <ExploreServers />
      </Main>
    </div>
  );
}
