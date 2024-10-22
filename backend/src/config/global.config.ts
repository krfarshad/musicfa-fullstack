import { configDotenv } from "dotenv";

configDotenv();

export const config = {
  env: process.env.MODE || "dev",
  port: process.env.PORT || "5003",
  jwt_secret: process.env.JWT_SECRET ?? "",
  csrf_secret: process.env.CSRF_SECRET ?? "",
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET ?? "",
  slack_url: process.env.SLACK_WEBHOOK_URL ?? "",
};
