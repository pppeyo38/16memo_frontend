import axios from "axios";
import { auth } from "../FirebaseConfig";

export const client = axios.create({
  baseURL: `${import.meta.env["VITE_APP_API_URL"]}`,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
});

client.interceptors.request.use(
  async (request) => {
    const idToken = await auth.currentUser?.getIdToken();

    request.headers = {
      Authorization: `Bearer ${idToken}`,
    };

    return request;
  },
  (error) => {
    console.log("error: " + error);
  }
);
