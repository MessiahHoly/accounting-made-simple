'use server'

import { OrganisationCreateInputObjectSchema, OrganisationInputSchema, OrganisationUncheckedCreateInputObjectSchema } from "@/prisma/generated/schemas";
import { getSession } from "../utils/server/utils";
import { z } from "zod";
import { getCleanFormData } from "../utils/utils";

export const createOrganisation = async (prevState: unknown, formData: FormData) => {
  const session = await getSession();
  // console.log(session);
  if (!session) {
    return { success: false, message: "Unauthorized" };
  }

  // console.log(formData);

  // const { name } = Object.fromEntries(formData.entries());
  // const formDataObj = Object.fromEntries(formData.entries());
  const filteredFormData = getCleanFormData(formData);
  // console.log(filteredFormData);
  // const validatedData = OrganisationUncheckedCreateInputObjectSchema.safeParse({ ...filteredFormData,  });
  const validatedData = OrganisationUncheckedCreateInputObjectSchema.safeParse({ ...filteredFormData, userId: session.user.id });
  // const validatedData = OrganisationUncheckedCreateInputObjectSchema.safeParse({ ...formDataObj, userId: session.user.id });
  // const validatedData = OrganisationUncheckedCreateInputObjectSchema.safeParse({ ...formDataObj, userId: session.user.id });
  // const validatedData = OrganisationCreateInputObjectSchema.safeParse({ ...formData, userId: session.user.id });
  // const validatedData = OrganisationCreateInputObjectSchema.safeParse({ name });
  // console.log(validatedData);
  // console.log(validatedData);

  if (!validatedData.success) {
    // const { fieldErrors } = z.flattenError(validatedData.error);
    const tree = z.treeifyError(validatedData.error);
    // console.log("Validation failed:", fieldErrors, tree);
    // return { success: false, message: "Invalid data", errors: tree };
    return { success: false, message: "Invalid data", errors: tree.properties };
  }
}