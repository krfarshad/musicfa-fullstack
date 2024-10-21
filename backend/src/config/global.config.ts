import { configDotenv } from "dotenv";

configDotenv();

export const config = {
  env: process.env.MODE || "dev",
  port: process.env.PORT || "5003",
  session_secret: process.env.SESSION_SECRET ?? "",
  crfToken: process.env.CRF_TOKEN ?? "",
  refreshToken: process.env.REFRESH_TOKEN ?? "",
  slack_url: process.env.SLACK_WEBHOOK_URL ?? "",
};
