import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  dbUri: process.env.DBURI,
  logLevel: process.env.LOGLEVEL,
  accessTokenPrivateKey: process.env.ATPK,
  refreshTokenPrivateKey: process.env.RTPK,
  user: process.env.USER,
  pass: process.env.PASS,
};
