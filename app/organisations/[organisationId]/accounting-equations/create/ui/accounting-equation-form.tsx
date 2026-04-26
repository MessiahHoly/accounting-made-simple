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
import { createAccountingEquation } from "@/lib/actions/accounting-equation"
import { createOrganisation } from "@/lib/actions/organisation"
import { useActionState } from "react"

export function AccountingEquationForm({ organisationId }: { organisationId: string }) {
  const createAccountingEquationWithOrganisationId = createAccountingEquation.bind(null, organisationId);
  const [state, action, pending] = useActionState(createAccountingEquationWithOrganisationId, null);

  return (
    <div className="w-full max-w-md">
      <form action={action}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="asset">
                  Asset
                </FieldLabel>
                <Input
                  id="asset"
                  required
                  name="asset"
                  type="number"
                />
                {state?.errors?.assets && (
                  <FieldError>
                    {state.errors.assets.errors[0]}
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
