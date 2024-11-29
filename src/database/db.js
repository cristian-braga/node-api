import postgres from "postgres";

export const sql = postgres({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
});

export async function dbCheckConnection() {
  try {
    const result = await sql`SELECT 1+1 AS result`;

    console.log("Conexão bem-sucedida ao PostgreSQL!", result);
  } catch (err) {
    throw new Error(`Erro ao conectar ao PostgreSQL: ${err.message}`);
  }
}
