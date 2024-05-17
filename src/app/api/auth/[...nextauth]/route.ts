import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { GoogleProfile } from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.given_name,
          image : profile.picture,
          email : profile.email,
          role: profile?.role ?? "user",
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({session, token}){
        session.user.role = token.role;
        return session
    }
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
