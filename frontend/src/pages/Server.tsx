import PrimaryAppBar from "./templates/PrimaryAppbar";
import PrimaryDraw from "./templates/PrimaryDraw";
import SecondaryDraw from "./templates/SecondaryDraw";
import Main from "./templates/Main";
import MessageInterface from "../components/Main/MessageInterface";
import ServerChannels from "../components/SecondaryDrawer/ServerChannel";
import UserServers from "../components/PrimaryDrawer/UserServers";
import { useParams, useNavigate } from "react-router-dom";
import type { Server } from "../@types/server.d";
import useCrud from "../hooks/useCrud";
import { useEffect } from "react";

export default function ServerPage() {
  const navigate = useNavigate();
  const { serverId, channelId } = useParams();
  const { dataCRUD, error, fetchData } = useCrud<Server>(
    [],
    `/server/select/?by_serverid=${serverId}`
  );

  useEffect(() => { fetchData(); }, [serverId]);

  // Channel existence check (unchanged)
  useEffect(() => {
    if (
      channelId &&
      !dataCRUD.some((server) =>
        server.channel_server.some(
          (channel) => channel.id === parseInt(channelId)
        )
      )
    ) {
      navigate(`/server/${serverId}`);
    }
  }, [dataCRUD, channelId, serverId, navigate]);

  if (error?.message === "400") {
    navigate("/");
    return null;
  }

  return (
    <div className="flex min-h-screen bg-[#23272a]">
      <PrimaryAppBar />
      <PrimaryDraw>
        <UserServers open={false} data={dataCRUD} />
      </PrimaryDraw>
      <SecondaryDraw>
        <ServerChannels data={dataCRUD} />
      </SecondaryDraw>
      <Main>
        <MessageInterface data={dataCRUD} />
      </Main>
    </div>
  );
}
