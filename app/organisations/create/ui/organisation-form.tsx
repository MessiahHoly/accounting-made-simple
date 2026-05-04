'use client'

import BackButton from "@/app/ui/back-button"
import SubmitButton from "@/app/ui/submit-button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createOrganisation } from "@/lib/actions/organisation"
import { useActionState } from "react"

export function OrganisationForm() {
  const [state, action, pending] = useActionState(createOrganisation, null);

  return (
    <div className="w-full max-w-md">
      <form action={action}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">
                  Name
                </FieldLabel>
                <Input
                  id="name"
                  required
                  name="name"
                />
                {state?.errors?.name && (
                  <FieldError>
                    {state.errors.name.errors[0]}
                  </FieldError>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <SubmitButton pending={pending} text="Create" pendingText="Creating..." />
            <BackButton text="Cancel" />
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
