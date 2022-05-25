import "dotenv/config";

const config = {
  PORT: parseInt(process.env.PORT) || 5000,
  SQLITE: {
    DATABASE: process.env.SQLITE_DATABASE || "data/database.db",
  },
};

export default config;
