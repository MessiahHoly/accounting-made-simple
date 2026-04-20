import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  plugins: [
    // add plugins here
    magicLink({
      // options for magic link plugin
      sendMagicLink: async ({ email, token, url, metadata }, ctx) => {
        // implement your logic to send the magic link email here
        // console.log(`Send magic link to ${email} with token: ${token}`);
        const { data, error } = await resend.emails.send({
          from: "Accounting Made Simple <do-not-reply@messiahholy.com>",
          to: email,
          subject: "Your Magic Link",
          html: `<p>Click the link below to log in:</p><p><a href="${url}">Log In</a></p>`,
        });

        if (error) {
          console.error("Error sending magic link:", error);
        } else {
          console.log("Magic link sent successfully:", data);
        }
      },
    }),
  ],
});