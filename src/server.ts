import * as http from "http";

import { getFilerEpisodes, getListEpisodes } from "./controllers/podscasts-controller";
import { Routes } from "./routes/routes";


const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

    
    const [baseUrl, queryString] = req.url ?.split("?") ?? ["", ""];
    
    if (req.method === "GET" && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === Routes.EPISODE) {
      await getFilerEpisodes(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
