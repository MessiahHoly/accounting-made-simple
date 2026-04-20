import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { magicLink } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  plugins: [
    // add plugins here
    magicLink({
      // options for magic link plugin
      sendMagicLink: async ({ email, token }) => {
        // implement your logic to send the magic link email here
        console.log(`Send magic link to ${email} with token: ${token}`);
      },
    }),
  ],
});