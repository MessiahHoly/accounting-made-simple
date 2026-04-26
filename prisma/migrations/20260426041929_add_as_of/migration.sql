/*
  Warnings:

  - Added the required column `asOf` to the `AccountingEquation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccountingEquation" ADD COLUMN     "asOf" TIMESTAMP(3) NOT NULL;
