import { deepLClient } from "./axios";
import { APILimitExceeded, InvalidAPIKey, TooManyRequests } from "./errors";

type LanguageCode = "DE" | "FR" | "EN";

/**
 * function to translate a text into the target language
 * uses deepL API
 * throws InvalidAPIKey, TooManyRequests, APILimitExceeded
 * @param language (string) : Language CODE, e.g. EN, DE, FR, ...
 * @param text (string): text that should be translated
 * @returns translated text
 */
export const translateText = (
  language: LanguageCode,
  text: string
): Promise<string | void> => {
  return deepLClient
    .get("v2/translate", { params: { text, target_lang: language } })
    .then((res) => res.data)
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
