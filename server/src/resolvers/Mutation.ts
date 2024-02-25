import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(_:any, args: { name:string, email: string, password: string }, context:any){
      const { name, email, password} = args;

      const saltRounds = 1000000*Math.random();
      const salt = await bcrypt.genSalt(saltRounds);
      const salted = await bcrypt.genSaltSync(parseInt(salt));
      const hashedPassword = await bcrypt.hashSync(password, salted)


      const user = await context.prisma.user.create({
          data:{
            name,
            email,
            password:hashedPassword
          } 
      })
      const token = jwt.sign({email: email}, 'yqwteuyvdfuia');
      return {token, user};
} 


