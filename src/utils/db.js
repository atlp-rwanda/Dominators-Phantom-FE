export const backendUrl = process.env.BACKEND_URL;
export const db = process.env.BACKEND_URL;
import { io } from "socket.io-client";
export const token = localStorage.getItem("token");
export const Authorization = `Bearer ${localStorage.getItem("token")}`;
const SOCKET_BACKEND_URL = process.env.BACKEND_URL.split("/api/")[0];
export const client = io(SOCKET_BACKEND_URL);
export const BACKEND_URL = process.env.BACKEND_URL;
export const headers = {
  Authorization,
  "Content-Type": "application/json",
};
