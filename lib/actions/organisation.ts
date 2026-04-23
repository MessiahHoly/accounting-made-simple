'use server'

import { getSession } from "../utils/server/utils";

export const createOrganisation = async (prevState: unknown, formData: FormData) => {
  const session = await getSession();
  if (!session) {
    return { success: false, message: "Unauthorized" };
  }

  const { name } = Object.fromEntries(formData.entries());
}