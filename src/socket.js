import { io } from "socket.io-client";
import { useAdminContext } from "./hooks/useAdminContext";
const PORT = import.meta.env.VITE_DOMAIN;

let socket; // Declare a variable to store the socket instance

const createSocketInstance = () => {
  const {user}= useAdminContext();

  return io(`${PORT}`, {
    autoConnect: false,
    withCredentials: true,
    query: {
      username: user.username,
      message: null,
      userType: user.userType
    },
  });
};

const getSocketInstance = () => {
  if (!socket) {
    // If the socket instance doesn't exist, create it
    socket = createSocketInstance();
  }

  return socket;
};

export default getSocketInstance;
