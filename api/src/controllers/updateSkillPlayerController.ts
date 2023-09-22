import { Request, Response } from "express";
import { PrismaClient } from "../database/prismaClient";

export class UpdateSkillPlayerController {
    async handle(request: Request, response: Response) {
        // Extrai o ID do jogador a ser atualizado dos parâmetros da solicitação.
        const playerId = parseInt(request.params.id, 10);
        // Extrai o campo skill do corpo.
        const { skill } = request.body;

        try {
            // Use o PrismaClient para atualizar a habilidade do jogador com base no ID.
            const updatedPlayer = await PrismaClient.player.update({
                where: {
                    id: playerId,
                },
                data: {
                    skill,
                },
            });

            return response.json(updatedPlayer);
        } catch (error) {
            // Se ocorrer um erro durante a atualização (por exemplo, jogador não encontrado),
            // retorne uma resposta de erro.
            return response.status(404).json({ error: "Jogador não encontrado" });
        }
    }
}