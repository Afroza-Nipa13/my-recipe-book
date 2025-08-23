import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import dbConnect, { collectionNamesObj } from "./dbConnect";
import { loginUser } from "@/app/actions/auth/loginUser";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await loginUser(credentials);
        if (user) return user;
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account) {
        const { providerAccountId, provider } = account;
        const { email, image, name } = user;

        const userCollection = await dbConnect(collectionNamesObj.userCollection);
        const isExisted = await userCollection.findOne({ providerAccountId });
        if (!isExisted) {
          const payload = { providerAccountId, provider, email, image, name };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "user"; // custom role add
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub; // provider id
        session.user.role = token.role || "user"; // add role in session
      }
      return session;
    },
  },
};
