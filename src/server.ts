import * as http from "http";

import { getFilerEpisodes, getListEpisodes } from "./controllers/podscasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && req.url === "/api/episode") {
      await getFilerEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
