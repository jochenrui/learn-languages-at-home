"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepLClient = void 0;
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("../constants/environment");
exports.deepLClient = axios_1.default.create({
    baseURL: "https://api-free.deepl.com/",
    timeout: 1000,
    headers: { Authorization: `DeepL-Auth-Key ${environment_1.DEEPL_API_KEY}` },
});
