import { deepLClient } from "./axios";
import { APILimitExceeded, InvalidAPIKey, TooManyRequests } from "./errors";

type LanguageCode = "DE" | "FR" | "EN";

export const translateText = (
  language: LanguageCode,
  text: string
): Promise<string | void> => {
  return deepLClient
    .get("v2/translate", { params: { text, target_lang: language } })
    .then((res) => {
      console.log(res.status);
      return "choose";
    })
    .catch((error) => {
      switch (error.response.status) {
        case 403:
          throw new InvalidAPIKey();
        case 429:
          throw new TooManyRequests();
        case 456:
          throw new APILimitExceeded();
      }
      throw error;
    });
};
