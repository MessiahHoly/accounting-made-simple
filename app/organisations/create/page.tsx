import { auth } from "@/lib/auth";
import { OrganisationForm } from "./ui/organisation-form";
import { headers } from "next/headers";
import { SignInForm } from "@/app/ui/sign-in-form";

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    return (
      <main className="w-full p-4">
        <h1>Sign In</h1>
        <SignInForm />
      </main>
    );
  }
  return (
    <main>
      <h1>Create Organisation</h1>
      {/* Form for creating an organisation goes here */}
      <OrganisationForm />
    </main>
  );
}