"use server";

import { getSession } from "../utils/server/utils";
import { getCleanFormData } from "../utils/utils";
import { AccountingEquationUncheckedCreateInputObjectSchema } from "@/prisma/generated/schemas";
import { z } from "zod";
import prisma from "../prisma";
import { redirect } from "next/navigation";

type FormInput = z.infer<typeof AccountingEquationUncheckedCreateInputObjectSchema>;
type FormErrors = {
  [K in keyof FormInput]?: {
    errors: string[];
  };
};
type ActionResponse = { success: boolean, message: string, fields?: Partial<FormInput>, errors?: FormErrors };

export const createAccountingEquation = async (organisationId: string, prevState: unknown, formData: FormData): Promise<ActionResponse> => {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized" };
  }

  const AccountingEquationSchema = AccountingEquationUncheckedCreateInputObjectSchema.refine((data) => {
    const { assets, liabilities, ownersEquity } = data;
    return Number(assets) === Number(liabilities) + Number(ownersEquity);
  }, {
    message: "The accounting equation must hold: Assets = Liabilities + Owner's Equity",
    path: ["assets"],
    // path: ["assets", "liabilities", "ownersEquity"],
  });

  const fields = getCleanFormData(formData);
  // const filteredFormData = getCleanFormData(formData);
  const validatedData = AccountingEquationSchema.safeParse({
    ...fields, userId: session.user.id, organisationId
    // ...filteredFormData, userId: session.user.id, organisationId
  });

  if (!validatedData.success) {
    const tree = z.treeifyError(validatedData.error);
    return { success: false, message: "Invalid data", errors: tree.properties, fields };
    // return { success: false, message: "Invalid data", errors: tree.properties, fields: filteredFormData };
  }
  // }

  const { data } = validatedData
  await prisma.accountingEquation.create({
    data
  });

  redirect(`/organisations/${organisationId}`);
}