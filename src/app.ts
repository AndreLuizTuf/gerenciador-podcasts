import * as http from "http";

import {
  getFilerEpisodes,
  getListEpisodes,
} from "./controllers/podscasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
    await getFilerEpisodes(request, response);
  }
};
