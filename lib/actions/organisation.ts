'use server'

import {
  OrganisationUncheckedCreateInputObjectSchema
} from "@/prisma/generated/schemas";
import { getSession } from "../utils/server/utils";
import { z } from "zod";
import { getCleanFormData } from "../utils/utils";
import prisma from "../prisma";
import { redirect } from "next/navigation";

export const createOrganisation = async (prevState: unknown, formData: FormData) => {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized" };
  }
  const filteredFormData = getCleanFormData(formData);
  const validatedData = OrganisationUncheckedCreateInputObjectSchema.safeParse({ ...filteredFormData, userId: session.user.id });

  if (!validatedData.success) {
    const tree = z.treeifyError(validatedData.error);
    return { success: false, message: "Invalid data", errors: tree.properties };
  }

  const {data} = validatedData
  const {id} = await prisma.organisation.create({
    data
  });

  // return { success: true, message: "Organisation created successfully" };
  redirect(`/organisations/${id}`);
}