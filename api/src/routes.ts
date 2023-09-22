import  { Router } from "express";
import { CreatePlayerController } from "./controllers/createPlayerController";
import { DeletePlayerController } from "./controllers/deletePlayerController";
import { ListPlayersController } from "./controllers/listPlayersController";
import { GetPlayerController } from "./controllers/getPlayerController";
import { UpdateSkillPlayerController } from "./controllers/updateSkillPlayerController";


const router = Router();

const createPlayer = new CreatePlayerController();
const listPlayers = new ListPlayersController();
const getPlayer = new GetPlayerController();
const updateSkill = new UpdateSkillPlayerController();
const deletePlayer = new DeletePlayerController();


router.post("/player", createPlayer.handle);
router.get("/players", listPlayers.handle);
router.get("/players/:id",getPlayer.handle);
router.put("/player/:id/skill", updateSkill.handle);
router.delete("/player/:id", deletePlayer.handle);

export { router };