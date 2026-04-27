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
import { useActionState } from "react"

type ActionReturnType = Awaited<ReturnType<typeof createAccountingEquation>>

const initialState: ActionReturnType = {
  success: false,
  message: "",
  fields: undefined,
  errors: undefined,
}

export function AccountingEquationForm({ organisationId }: { organisationId: string }) {
  const createAccountingEquationWithOrganisationId = createAccountingEquation.bind(null, organisationId);
  const [state, action, pending] = useActionState<ActionReturnType, FormData>(createAccountingEquationWithOrganisationId, initialState);
  // const [state, action, pending] = useActionState<ActionReturnType, FormData>(createAccountingEquationWithOrganisationId, null as any);

  return (
    <div className="w-full max-w-md">
      <form action={action}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="asOf">
                  As of
                </FieldLabel>
                <Input
                  id="asOf"
                  required
                  name="asOf"
                  type="date"
                  defaultValue={String(state?.fields?.asOf) || ""}
                />
                {state?.errors?.asOf && (
                  <FieldError>
                    {state.errors.asOf.errors[0]}
                  </FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="assets">
                  Asset
                </FieldLabel>
                <Input
                  id="assets"
                  required
                  name="assets"
                  type="number"
                  defaultValue={String(state?.fields?.assets) || ""}
                />
                {state?.errors?.assets && (
                  <FieldError>
                    {state.errors.assets.errors[0]}
                  </FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="liabilities">
                  Liability
                </FieldLabel>
                <Input
                  id="liabilities"
                  required
                  name="liabilities"
                  type="number"
                  defaultValue={String(state?.fields?.liabilities) || ""}
                />
                {state?.errors?.liabilities && (
                  <FieldError>
                    {state.errors.liabilities.errors[0]}
                  </FieldError>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="ownersEquity">
                  Owner's Equity
                </FieldLabel>
                <Input
                  id="ownersEquity"
                  required
                  name="ownersEquity"
                  type="number"
                  defaultValue={String(state?.fields?.ownersEquity) || ""}
                />
                {state?.errors?.ownersEquity && (
                  <FieldError>
                    {state.errors.ownersEquity.errors[0]}
                  </FieldError>
                )}
              </Field>
              {!state?.success && state?.message && (
                <FieldError>
                  {state.message}
                </FieldError>
              )}
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
