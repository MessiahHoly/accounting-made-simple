import * as z from 'zod';

export const OrganisationScalarFieldEnumSchema = z.enum(['id', 'name', 'createdAt', 'updatedAt', 'userId'])

export type OrganisationScalarFieldEnum = z.infer<typeof OrganisationScalarFieldEnumSchema>;