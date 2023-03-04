import { object, string, TypeOf } from "zod";

export const createGameSchema = object({
  body: object({
    exercise: string({
      required_error: "Exercise is required",
    }),
    details: string({
      required_error: "Details is required",
    }),
    gameId: string({
      required_error: "Game id is required",
    }),
  }),
});

export type CreateGameInput = TypeOf<typeof createGameSchema>["body"];
