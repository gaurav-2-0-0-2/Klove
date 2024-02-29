import {YogaInitialContext} from "graphql-yoga";
import { PrismaClient, User} from '@prisma/client'
import {authenticateUser} from "./auth.js";

const prisma = new PrismaClient()

export type GraphQLContext = {
  prisma: PrismaClient
  currentUser: User | null
}

export async function createContext(initialContext:YogaInitialContext): Promise<GraphQLContext> {

	return {
	  prisma,
	  currentUser: await authenticateUser(prisma, initialContext.request)
	};

} 
