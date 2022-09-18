"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateText = void 0;
const axios_1 = require("./axios");
const translateText = (language, text) => {
    return axios_1.deepLClient
        .get("v2/translate", { params: { text, target_lang: language } })
        .then((res) => res.data)
        .catch((err) => console.error(err));
};
exports.translateText = translateText;
