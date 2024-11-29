import VideoService from '../services/videoService.js';

export class VideoController {
  static async index(request, reply) {
    const { search } = request.query;

    try {
      const videos = await VideoService.list(search);

      if (videos.length === 0)
        return reply.status(200).send({ message: 'Não há dados cadastrados.' });

      return reply.status(200).send(videos);
    } catch (error) {
      return reply.status(400).send({ message: error.message });
    }
  }

  static async create(request, reply) {
    const data = request.body;

    try {
      const video = await VideoService.create(data);

      return reply.status(201).send(video);
    } catch (error) {
      return reply.status(400).send({ message: error.message });
    }
  }

  static async show(request, reply) {
    const { id } = request.params;

    try {
      const video = await VideoService.show(id);

      return reply.status(200).send(video);
    } catch (error) {
      return reply.status(400).send({ message: error.message });
    }
  }

  static async update(request, reply) {
    const { id } = request.params;

    const data = request.body;

    try {
      const video = await VideoService.update(id, data);

      if (!video)
        return reply
          .status(404)
          .send({ message: 'Não foi possível encontrar o vídeo.' });

      return reply.status(200).send(video);
    } catch (error) {
      return reply.status(400).send({ message: error.message });
    }
  }

  static async delete(request, reply) {
    const { id } = request.params;

    try {
      const video = await VideoService.delete(id);

      if (video.length === 0)
        return reply
          .status(404)
          .send({ message: 'Não foi possível encontrar o vídeo.' });

      return reply.status(200).send({ message: 'Vídeo excluído com sucesso!' });
    } catch (error) {
      return reply.status(400).send({ message: error.message });
    }
  }
}
