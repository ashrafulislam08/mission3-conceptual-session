import dotenv from "dotenv";

dotenv.config();

export default {
  node_env: process.env.node_env,
  mongodb_uri: process.env.MONGODB_URI,
  port: process.env.PORT,
};
