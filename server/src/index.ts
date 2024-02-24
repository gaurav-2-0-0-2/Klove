import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/resolvers.js";
import { typeDefs } from "./schema/schema.js";
// import { context } from "./context.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({}) => {
    return prisma;
  },
});

console.log(`🚀  Server ready at: ${url}`);
