import jwt, {JwtPayload} from "jsonwebtoken"
const {verify} = jwt;
import {PrismaClient, User} from "@prisma/client";

const SECRET = 'yqwteuyvdfuia';


export async function authenticateUser(
	prisma: PrismaClient,
	request: Request	
): Promise<User | null>{

	const header = request.headers.get('authorization');
	if (header!==null){

		const token = header.split(' ')[1];

		const tokenPayload = verify(token, SECRET) as JwtPayload;

		const userId = tokenPayload.userId;

		return await prisma.user.findUnique({where: {id: userId}});
	}

	return null;

}
