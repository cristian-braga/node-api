import Fastify from 'fastify';
import routes from './routes.js';
import { dbCheckConnection } from './database/db.js';

const server = Fastify({
  logger: true,
});

server.register(routes);

const SERVERPORT = process.env.SERVERPORT ?? 3333;

async function startServer() {
  try {
    await dbCheckConnection();

    server.listen({ port: SERVERPORT }, () => {
      console.log(`Servidor rodando em http://localhost:${SERVERPORT}`);
    });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

startServer();
