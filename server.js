import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();
const db = new DatabaseMemory();

server.listen({ port: 3333 });

server.get("/videos", (request, reply) => {
  const videos = db.list();

  return videos;
});

server.post("/videos", (request, reply) => {
  const { title, description, duration } = request.body;

  db.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.put("/videos/:id", (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  db.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", (request, reply) => {
  const videoId = request.params.id;

  db.delete(videoId);

  return reply.status(204).send();
});
