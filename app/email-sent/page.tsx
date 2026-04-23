import { getSession } from "@/lib/server/utils";

export default async function Page() {
  const session = await getSession();

  console.log("Session:", session);

  if (session) {
    return (
      <main className="p-4">
        <h1>Oops...</h1>
        <p>You have reached a wrong place.</p>
      </main>
    )
  }

  return (
    <main className="p-4">
      <h1>Email Sent</h1>
      <p>A magic link has been sent to your email address. Please check your inbox and click the link to sign in.</p>
    </main>
  )
}