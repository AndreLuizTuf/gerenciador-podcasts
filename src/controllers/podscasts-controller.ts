import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end({
    name: "André Luiz",
  });
};
