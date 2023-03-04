import { Request, Response } from "express";
import { identity } from "lodash";
import GameModel from "../model/game.model";
import UserModel, { GameScore } from "../model/user.model";
import { CreateGameInput } from "../schema/game.schema";
import { createGame } from "../service/game.service";

export async function createGameHandler(
  req: Request<{}, {}, CreateGameInput>,
  res: Response
) {
  const body = req.body;
  console.log(body);

  try {
    const game = await createGame(body);
    return res.send(game);
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(409).send("Game already exists");
    }

    return res.status(500).send(e);
  }
}
export async function getAllGamesHandler(req: Request, res: Response) {
  try {
    const games = await GameModel.find();
    res.status(200).json({ games });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getGameHandler(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const game = await GameModel.findById(id);
    res.status(200).json({ game });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function updateScoreHandler(req: Request, res: Response) {
  const id = req.params.id;
  const userId = res.locals.user;

  try {
    const user = await UserModel.findById(userId);
    const gameScoreIndex = user!.points.findIndex(
      (point) => point.gameId === id
    );

    if (gameScoreIndex === -1) {
      const gameScore: GameScore = {
        score: req.body.score,
        date: new Date(),
        gameId: id,
      };
      user!.points.push(gameScore);
      await user!.save();
    } else {
      user!.points[gameScoreIndex].score += parseInt(req.body.point);
      await user!.save();
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
