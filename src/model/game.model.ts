import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Game {
  @prop({ required: true })
  exercise: string;

  @prop({ required: true })
  details: string;

  @prop({ required: true })
  duration: number;

  @prop({ required: true })
  gameId: string;
}

const GameModel = getModelForClass(Game);

export default GameModel;
