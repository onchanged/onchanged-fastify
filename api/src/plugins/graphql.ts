import fp from "fastify-plugin";
import mercurius from "mercurius";
import { schema, resolvers } from "../graphql";

export interface GraphQLOptions {}

export default fp<GraphQLOptions>(async (fastify, opts) => {
  fastify.register(mercurius, { schema, resolvers });
});
