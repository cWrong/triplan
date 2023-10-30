import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { getOrCreateUser } from "@/service/auth/auth";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const res = await response.json();

        if (response.ok && res) {
          return res;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        const currentUser = await getOrCreateUser(
          {
            username: user.email?.split("@")[0] || "",
            name: user.name || "",
            email: user.email || "",
            image: user.image || "",
            provider: account?.provider,
          },
          account?.provider,
        );
        if (!currentUser) return false;
        return true;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
