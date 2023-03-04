import express from "express";
import {
  createGameHandler,
  getAllGamesHandler,
  getGameHandler,
  updateScoreHandler,
} from "../controller/game.controller";
import requireUser from "../middleware/requireUser";

const router = express.Router();

router.post("/api/games", requireUser, createGameHandler);
router.get("/api/games", requireUser, getAllGamesHandler);
router.get("/api/game/:id", requireUser, getGameHandler);
router.post("/api/game/:id", requireUser, updateScoreHandler);

export default router;
