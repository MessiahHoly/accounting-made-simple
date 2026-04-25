import * as z from 'zod';

export const AccountingEquationScalarFieldEnumSchema = z.enum(['id', 'assets', 'liabilities', 'ownersEquity', 'createdAt', 'updatedAt', 'userId', 'organisationId'])

export type AccountingEquationScalarFieldEnum = z.infer<typeof AccountingEquationScalarFieldEnumSchema>;