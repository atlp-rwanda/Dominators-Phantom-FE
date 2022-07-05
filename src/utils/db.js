export const backendUrl = process.env.BACKEND_URL;
export const token = localStorage.getItem("token");
export const Authorization = `Bearer ${localStorage.getItem("token")}`;
export const headers = {
  Authorization,
  "Content-type": "Application/json"
}