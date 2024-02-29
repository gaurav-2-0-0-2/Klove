import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {GraphQLContext} from "../context";

// const SECRET = 'yqwteuyvdfuia';
const SECRET = process.env.SECRET;


export async function signup(_:any, args: { name:string, email: string, password: string }, context:GraphQLContext){
      const { name, email, password} = args;

      const saltRounds = 1000000*Math.random();
      const salt = await bcrypt.genSalt(saltRounds);
      const salted = bcrypt.genSaltSync(parseInt(salt));
      const hashedPassword = bcrypt.hashSync(password, salted)


      const user = await context.prisma.user.create({
          data:{
            name,
            email,
            password:hashedPassword
          } 
      })

      const token = jwt.sign({userId: user.id}, SECRET!);
      return {token,user};
} 

export async function  login (_:any, args:{ email: string, password: string}, context:GraphQLContext){

	const {email, password} = args;
	
	const user = await context.prisma.user.findUnique({
	  where: {email: email}
	})
	if (!user) throw new Error("No such user exists");

	const valid = await bcrypt.compare(password, user.password);

	if (!valid) throw new Error("Password is Invalid");

        const token = jwt.sign({userId: user.id}, SECRET!);

	return {user, token};
}

 

