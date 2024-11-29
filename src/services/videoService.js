import { DatabaseMemory } from '../database/database-memory.js';
import { Video } from '../models/Video.js';

export default class VideoService {
  // static #database = new DatabaseMemory();

  static async list(search) {
    // const videos = await this.#database.list(search);

    const videos = await Video.list(search);

    return videos;
  }

  static async create(data) {
    // const video = await this.#database.create(data);

    const video = await Video.create(data);

    return video;
  }

  static async show(id) {
    // const video = await this.#database.show(id);

    const video = await Video.show(id);

    return video;
  }

  static async update(id, data) {
    // const video = await this.#database.update(id, data);

    const video = await Video.update(id, data);

    return video;
  }

  static async delete(id) {
    // const video = await this.#database.delete(id);

    const video = await Video.delete(id);

    return video;
  }
}
