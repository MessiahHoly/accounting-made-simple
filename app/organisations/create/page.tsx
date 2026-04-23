// import { auth } from "@/lib/auth";
import { OrganisationForm } from "./ui/organisation-form";
// import { headers } from "next/headers";
import { SignInForm } from "@/app/ui/sign-in-form";
import { getSession } from "@/lib/server/utils";

export default async function Page() {
  const session = await getSession();

  if (!session) {
    return (
      <main className="w-full max-w-md px-4">
      {/* <main className="w-full p-4"> */}
        <h1>Sign In</h1>
        <SignInForm />
      </main>
    );
  }
  return (
    <main className="w-full max-w-md px-4">
      <h1>Create Organisation</h1>
      <OrganisationForm />
    </main>
  );
}