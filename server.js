import { fastify } from "fastify";
import { DatabasePostgress } from "./database-postgres.js";

const server = fastify();

const db = new DatabasePostgress();

server.listen({ port: process.env.PORT ?? 3333 });

server.get("/videos", async (request, reply) => {
  const search = request.query.search;
  const videos = db.list(search);

  return videos;
});

server.post("/videos", async (request, reply) => {
  const { title, description, duration } = request.body;

  await db.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

server.put("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await db.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

server.delete("/videos/:id", async (request, reply) => {
  const videoId = request.params.id;

  await db.delete(videoId);

  return reply.status(204).send();
});
