// Importa as classes Request e Response do módulo "express".
import { Request, Response, response } from "express";
// Importa o PrismaClient a partir de um arquivo "../database/prismaClient".
import { PrismaClient } from "../database/prismaClient";

// Define uma classe chamada CreatePlayerController para lidar com a criação de jogadores.
export class CreatePlayerController {
    // Define um método assíncrono chamado "handle" que recebe um pedido (request) e uma resposta (response).
    async handle(request: Request, response: Response){
        // Extrai os campos "name", "position" e "skill" do corpo (body) do pedido.
        const { name, position, skill} = request.body; 
        // Utiliza o PrismaClient para criar um novo jogador no banco de dados.
         // Os dados do jogador são fornecidos como um objeto no formato { name, position, skill }.

        const player = await PrismaClient.player.create({
            data: {
                name,
                position,
                skill
            }
        })

        //na resposta ele devolve o jogador criado

        return response.json(player);  
    }
}