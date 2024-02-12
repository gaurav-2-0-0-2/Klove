import type { NextAuthOptions } from "next-auth";
import  GoogleProfile  from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProfile({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      async profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      }
    }),
  ],
  
  session:{
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account!.provider === 'google'){
        console.log(user);
      }
      return true;
    },
    
    async jwt({token, account, user} : any){

      if (account){
        // console.log(account.access_token);
        token.accessToken = account.access_token

      }

      return {...token, ...user}

    },
    async session({session, token, user}: any ){

      session.user = token
      return session

    }
  },
  pages:{
    signIn: "/login",
  },
};
