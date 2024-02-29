import {createServer} from "node:http";
import { createYoga } from "graphql-yoga";
import { createSchema } from "graphql-yoga";
import resolvers from "./resolvers/resolvers.js";
import { typeDefs } from "./schema/schema.js";
import { createContext } from "./context.js";
import 'dotenv/config'

const PORT = process.env.PORT;

const schema = createSchema({
  typeDefs, resolvers
})

const yoga = createYoga({schema, context: createContext});

const server = createServer(yoga);

server.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}/graphql`)
})


