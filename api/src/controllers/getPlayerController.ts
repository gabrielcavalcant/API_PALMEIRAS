import { Request, Response, } from "express";
import { PrismaClient } from "../database/prismaClient";    

export class GetPlayerController {
    async handle(request: Request, response: Response){
    const PlayerId = parseInt(request.params.id, 10);
    try{
        const player = await PrismaClient.player.findUnique({
            where:{
                id: PlayerId,
            },
        });

        if (!player){
            return response.status(404).json({ error: "Jogador não encontrado"});
        }
        return response.json(player);

    }catch(error){
        return response.status(500).json({ error: "Erro ao buscar o jogador"})
    }
    }
}

