'use client'

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner";
import { authClient } from "@/lib/auth-client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import BackButton from "./back-button";
import SubmitButton from "./submit-button";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const callbackURL = `${pathname}?${params.toString()}`;

  const handleSignIn = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setSigningIn(true);
    const { data, error } = await authClient.signIn.magicLink({
      email, callbackURL
    })
    if (error) {
      console.error("Error sending magic link:", error);
    } else {
      console.log("Magic link sent:", data);
    }
    redirect('/email-sent');
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSignIn}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            {/* {signingIn ? (
              <Button disabled>
                <Spinner data-icon="inline-start" />
                Signing in...
              </Button>
            ) : (
              <Button>
                Sign in
              </Button>
            )} */}
            <SubmitButton pending={signingIn} text="Sign in" pendingText="Signing in..." />
            <BackButton text="Cancel" />
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}