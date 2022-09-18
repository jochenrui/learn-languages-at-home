import axios, { AxiosInstance } from "axios";
import { PORT } from "../constants/environment";

export const deepLClient: AxiosInstance = axios.create({
  baseURL: `http://localhost:${PORT}/`,
  timeout: 1000,
});
