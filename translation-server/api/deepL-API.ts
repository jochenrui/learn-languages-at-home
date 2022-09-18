import { deepLClient } from "./axios";

type LanguageCode = "DE" | "FR" | "EN";

export const translateText = (
  language: LanguageCode,
  text: string
): Promise<string> => {
  return deepLClient
    .get("v2/translate", { params: { text, target_lang: language } })
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
