import express from "express";
import user from "./user.routes";
import auth from "./auth.routes";
import game from "./game.routes";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);
router.use(auth);
router.use(game);

export default router;
