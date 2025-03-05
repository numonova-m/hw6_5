import pkg from "pg";
const { Pool } = pkg;
const database = async () => {
  return new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  });
};

export default database;
