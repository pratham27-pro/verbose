import { useState } from "react";
import { useAuthServiceContext } from "@/hooks/useServiceAuth"; 
import useAxiosWithJwtInterceptor from "@/helpers/jwtInterceptor";
import { BASE_URL } from "@/config";

export default function TestLogin() {
  const { isLoggedIn, logout } = useAuthServiceContext();
  const [username, setUsername] = useState("");
  const jwtAxios = useAxiosWithJwtInterceptor();

  const getUserDetails = async () => {
    try {
      const response = await jwtAxios.get(
        `${BASE_URL}/account/?user_id=1`,
        { withCredentials: true }
      );
      setUsername(response.data.username);
    } catch (err: any) {
      // handle appropriately (for dev)
      console.log("error in the Test login file", err);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-[#2b2d31] rounded-xl shadow mt-12 space-y-3">
      <div className="text-md text-white font-mono">
        <span className="inline-block w-36">Logged in:</span>
        <span className="text-green-400">{isLoggedIn ? "true" : "false"}</span>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-[#5865f2] hover:bg-[#404eed] text-white px-4 py-2 rounded font-semibold transition focus:outline-none"
          onClick={logout}
        >Logout</button>
        <button
          className="bg-[#393943] hover:bg-[#23272a] text-white px-4 py-2 rounded font-semibold transition focus:outline-none"
          onClick={getUserDetails}
        >Get User Details</button>
      </div>
      <div className="text-sm text-gray-300 pt-3 font-mono">
        Username: <span className="text-white">{username}</span>
      </div>
    </div>
  );
}
