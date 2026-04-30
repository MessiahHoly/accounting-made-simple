import prisma from "../prisma";

export const fetchOrganisation = async (id: string) => prisma.organisation.findUnique({
  where: { id, },
  include: { accountingEquations: { orderBy: { asOf: "desc" } } },
  // include: { accountingEquations: true }
});