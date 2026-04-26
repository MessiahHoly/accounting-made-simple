"use server";

import { OrganisationUncheckedCreateInputObjectSchema } from "@/prisma/generated/schemas/objects/OrganisationUncheckedCreateInput.schema";
import { getSession } from "../utils/server/utils";
import { getCleanFormData } from "../utils/utils";
import { AccountingEquationUncheckedCreateInputObjectSchema } from "@/prisma/generated/schemas";
import { z } from "zod";
import prisma from "../prisma";
import { redirect } from "next/navigation";

export const createAccountingEquation = async (organisationId: string, prevState: unknown, formData: FormData) => {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized" };
  }

  const filteredFormData = getCleanFormData(formData);
  const validatedData = AccountingEquationUncheckedCreateInputObjectSchema.safeParse({
    ...filteredFormData, userId: session.user.id, organisationId
  });

  if (!validatedData.success) {
    const tree = z.treeifyError(validatedData.error);
    return { success: false, message: "Invalid data", errors: tree.properties };
  }

  const { data } = validatedData
  const { id } = await prisma.accountingEquation.create({
    data
  });

  // return { success: true, message: "Organisation created successfully" };
  redirect(`/organisations/${organisationId}/accounting-equations/${id}`);
}