// Importa o módulo "express", que é um framework web para Node.js.
const express = require('express');

// Importa o objeto "router" de outro arquivo chamado "routes".
import { router } from "./routes";
import * as cors from "cors";
// Cria uma instância do aplicativo Express.
const app = express();

// Habilita o middleware express.json()
// para processar solicitações com formato JSON.
app.use(express.json());
app.use(cors())
app.use(router);

app.listen(3333, () => console.log("server está rodando na porta 3333"));