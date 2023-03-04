import GameModel, { Game } from "../model/game.model";

export function createGame(input: Partial<Game>) {
  return GameModel.create(input);
}
