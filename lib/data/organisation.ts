import prisma from "../prisma";

export const fetchOrganisation = async (id: string) => prisma.organisation.findUnique({
  where: {
    id,
  },
});