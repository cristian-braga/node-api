import { randomUUID } from 'node:crypto';
import { sql } from '../database/db.js';

export class Video {
  static async list(search) {
    const videos =
      await sql`SELECT * FROM videos ${search ? sql`WHERE title ILIKE ${`%${search}%`}` : sql``}`;

    return videos;
  }

  static async create(data) {
    const videoId = randomUUID();

    const video =
      await sql`INSERT INTO videos ${sql({ id: videoId, ...data })} RETURNING *`;

    return video;
  }

  static async show(id) {
    const video = await sql`SELECT * FROM videos WHERE id = ${id}`;

    return video;
  }

  static async update(id, data) {
    const video =
      await sql`UPDATE videos SET ${sql(data)} WHERE id = ${id} RETURNING *`;

    return video;
  }

  static async delete(id) {
    const video = await sql`DELETE FROM videos WHERE id = ${id} RETURNING *`;

    return video;
  }
}
