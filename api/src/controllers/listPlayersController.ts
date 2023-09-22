import { Request, Response } from "express";
import { PrismaClient } from "../database/prismaClient";

export class ListPlayersController {
    async handle(request: Request, response: Response) {
        try {
            // Use o PrismaClient para buscar todos os jogadores no banco de dados.
            const players = await PrismaClient.player.findMany();

            // Retorne a lista de jogadores em formato JSON.
            return response.json(players);
        } catch (error) {
            // Se ocorrer um erro durante a busca, retorne uma resposta de erro.
            return response.status(500).json({ error: "Erro ao buscar jogadores" });
        }
    }
}






