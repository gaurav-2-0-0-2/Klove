import {createServer} from "node:http";
import { createYoga } from "graphql-yoga";
import { createSchema } from "graphql-yoga";
import resolvers from "./resolvers/resolvers.js";
import { typeDefs } from "./schema/schema.js";
import { PrismaClient } from '@prisma/client'
import { PrismaContext } from "./context.js";
const prisma = new PrismaClient()

const schema = createSchema({
  typeDefs, resolvers
})

const yoga = createYoga({schema, context: ():PrismaContext => ({prisma})});

const server = createServer(yoga);

server.listen(4000, ()=>{
  console.log('Server is running on http://localhost:4000/graphql')
})


