import { randomUUID } from "node:crypto";

export class DatabaseMemory {
  #videos = new Map();

  list(search) {
    const videos = Array.from(this.#videos.entries())
      .map((video) => {
        const id = video[0];
        const data = video[1];

        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.toLowerCase().includes(search.toLowerCase());
        }

        return true;
      });

    return videos;
  }

  create(data) {
    const videoId = randomUUID();

    this.#videos.set(videoId, data);

    return {
      id: videoId,
      ...data,
    };
  }

  show(id) {
    const video = this.#videos.get(id);

    if (!video) return null;

    return video;
  }

  update(id, data) {
    const video = this.#videos.get(id);

    if (!video) return null;

    this.#videos.set(id, data);

    return {
      id,
      ...data,
    };
  }

  delete(id) {
    const video = this.#videos.get(id);

    if (!video) return null;

    const isDeleted = this.#videos.delete(id);

    return isDeleted;
  }
}
