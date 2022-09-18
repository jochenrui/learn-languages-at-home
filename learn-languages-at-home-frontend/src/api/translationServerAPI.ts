import { deepLClient } from "./axios";

export const translateText = (selectedLanguage: string, text: string) => {
  return deepLClient
    .post("/translate", {
      params: { language: selectedLanguage, text },
    })
    .then((res) => {
      return res.data.translations;
    })
    .catch((err) => console.error(err));
};
