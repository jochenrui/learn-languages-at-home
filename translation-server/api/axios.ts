import axios from "axios";

import { DEEPL_API_KEY } from "../constants/environment";

export const deepLClient = axios.create({
  baseURL: "https://api-free.deepl.com/",
  timeout: 1000,
  headers: { Authorization: `DeepL-Auth-Key ${DEEPL_API_KEY}` },
});
