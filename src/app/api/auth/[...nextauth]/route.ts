import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { SanityAdapter } from "next-auth-sanity";
import { sanityClient } from "@/service/sanity";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  adapter: SanityAdapter(sanityClient),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      console.log("signIn", user, account, profile, email, credentials);
      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
