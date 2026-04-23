import { getSession } from "@/lib/utils/server/utils";
import BackButton from "../ui/back-button";

export default async function Page() {
  const session = await getSession();

  // console.log("Session:", session);

  if (session) {
    return (
      <main className="p-4">
        <h1>Oops...</h1>
        <p>You have reached a wrong place.</p>
        <BackButton text="Okay" />
      </main>
    )
  }

  return (
    <main className="w-full max-w-md px-4">
      {/* <main className="p-4"> */}
      <h1>Email Sent</h1>
      <p>A magic link has been sent to your email address. Please check your inbox and click the link to sign in.</p>
    </main>
  )
}