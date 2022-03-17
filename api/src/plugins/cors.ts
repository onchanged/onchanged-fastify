import fp from "fastify-plugin";
import fastifyCors, { FastifyCorsOptions } from "fastify-cors";

export default fp<FastifyCorsOptions>(async (fastify, opts) => {
  fastify.register(fastifyCors, {
    origin: "*",
  });
});
