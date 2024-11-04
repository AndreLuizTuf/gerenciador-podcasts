import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/filter-podcast-model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilerEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  
  const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);
  res.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
  res.write(JSON.stringify(content.body));

  res.end();
};
