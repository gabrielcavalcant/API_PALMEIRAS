import { Request, Response } from "express";
import { PrismaClient } from "../database/prismaClient";

export class DeletePlayerController {
    async handle(request: Request, response: Response) {
        // Extrai o ID do jogador a ser excluído dos parâmetros da solicitação.
        const playerId = parseInt(request.params.id, 10); // Suponha que o ID seja um número inteiro.

        try {
            // Utiliza o PrismaClient para excluir o jogador com o ID especificado.
            const deletePlayer = await PrismaClient.player.delete({
                where: {
                    id: playerId,
                },
            });

            // Se a exclusão for bem-sucedida, você pode retornar uma mensagem de sucesso ou os dados do jogador excluído.
            return response.json(deletePlayer);
        } catch (error) {
            // Se ocorrer um erro durante a exclusão (por exemplo, jogador não encontrado), você pode retornar uma resposta de erro.
            return response.status(404).json({ error: "Jogador não encontrado" });
        }
    }
}






