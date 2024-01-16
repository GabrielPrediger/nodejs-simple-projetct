import { randomUUID } from "crypto";

export class DatabaseMemory {
  #videos = new Map();

  list() {
    //entries retorna um array de array que no indice 0 é o id e no indice 1 é os dados
    return Array.from(this.#videos.entries()).map((videoArr) => {
      //pra isso percorremos o array e retornamos em um novo formato
      const id = videoArr[0];
      const data = videoArr[1];

      return { id, ...data };
    });
  }

  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  update(id, video) {
    this.#videos.set(id, video);
  }

  delete(id) {
    this.#videos.delete(id);
  }
}
