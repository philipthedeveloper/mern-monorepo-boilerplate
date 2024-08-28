import dotenv from "dotenv";

dotenv.config();

interface Config extends Record<string, any> {
  PORT: number;
  JWT_SECRET: string | undefined;
  JWT_ISSUER: string | undefined;
  JWT_EXPIRATION: string | undefined;
  DB_CONNECTION_STRING: string | undefined;
  HOSTNAME: any;
  NODE_ENV: string;
  CORS_ORIGINS: string[];
}

interface Configs {
  development: Config;
  production: Config;
  test: Config;
}

const configs: Configs = {
  development: {
    PORT: Number(process.env.DEV_PORT || 3000),
    JWT_SECRET: process.env.DEV_JWT_SECRET,
    JWT_ISSUER: process.env.DEV_JWT_ISSUER,
    JWT_EXPIRATION: process.env.DEV_JWT_EXPIRATION,
    DB_CONNECTION_STRING: process.env.DEV_DB_CONNECTION_STRING,
    HOSTNAME: process.env.IPV4_ADDRESS || "localhost",
    NODE_ENV: "development",
    CORS_ORIGINS: process.env.DEV_CORS_ORIGINS?.split(",") || [],
  },
  production: {
    PORT: Number(process.env.PORT || 3000),
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_ISSUER: process.env.JWT_ISSUER,
    JWT_EXPIRATION: process.env.JWT_EXPIRATION,
    DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
    HOSTNAME: null,
    NODE_ENV: "production",
    CORS_ORIGINS: process.env.CORS_ORIGINS?.split(",") || [],
  },
  test: {
    PORT: Number(process.env.TEST_PORT || 3000),
    JWT_SECRET: process.env.TEST_JWT_SECRET,
    JWT_ISSUER: process.env.TEST_JWT_ISSUER,
    JWT_EXPIRATION: process.env.TEST_JWT_EXPIRATION,
    DB_CONNECTION_STRING: process.env.TEST_DB_CONNECTION_STRING,
    HOSTNAME: process.env.IPV4_ADDRESS || "localhost",
    NODE_ENV: "test",
    CORS_ORIGINS: process.env.TEST_CORS_ORIGINS?.split(",") || [],
  },
};

export const envConfigs =
  configs[(process.env.NODE_ENV || "dev") as keyof typeof configs];

export default configs;
