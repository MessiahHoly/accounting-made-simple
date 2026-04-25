'use client'

import { Button } from "@/components/ui/button"
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
  // console.log(state, pending);

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
            {/* {state?.errors?.errors && (
              <FieldError>
                {state.errors.errors[0]}
              </FieldError>
            )} */}
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Save</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
