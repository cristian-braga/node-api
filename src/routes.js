import { VideoController } from './controllers/videoController.js';

export default function routes(fastify, options) {
  fastify.get('/videos', VideoController.index);
  fastify.post('/videos', VideoController.create);
  fastify.put('/videos/:id', VideoController.update);
  fastify.delete('/videos/:id', VideoController.delete);
}
