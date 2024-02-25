
const resolvers = {
  Query: {
    allUsers: (_:any, __:any, context:any) => {
      return context.prisma.user.findMany();
    },
  },

  Mutation:{
    async signup(_:any, args: { name:string, email: string; password: string; }, context:any){
      const { name, email, password} = args;

      const response = await context.prisma.user.create({
         data:{
          name,
          email,
          password
         } 
      })
      return response;
    } 
  }
};
export default resolvers;
