import * as z from 'zod';
export const AccountingEquationAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    assets: z.number(),
    liabilities: z.number(),
    ownersEquity: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number(),
    organisationId: z.number(),
    organisation: z.number()
  }).optional(),
  _sum: z.object({
    assets: z.number().nullable(),
    liabilities: z.number().nullable(),
    ownersEquity: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    assets: z.number().nullable(),
    liabilities: z.number().nullable(),
    ownersEquity: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    assets: z.number().nullable(),
    liabilities: z.number().nullable(),
    ownersEquity: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    organisationId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    assets: z.number().nullable(),
    liabilities: z.number().nullable(),
    ownersEquity: z.number().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    organisationId: z.string().nullable()
  }).nullable().optional()});