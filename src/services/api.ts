import axios from "axios";

// Test

// export const baseURL = "https://teststag.smrtstats.com:8888/api/v1";
// export const url = "https://teststag.smrtstats.com:8888";

// Prod

export const baseURL = "https://platform.smrtstats.com:8888/api/v1";
export const url = "https://platform.smrtstats.com:8888";
const langURL = 'https://lexicon.smrtstats.com/api'

export const instance = axios.create({
  baseURL,
});

export const $api_lang = axios.create({ baseURL: langURL });