-- CreateTable
CREATE TABLE "AccountingEquation" (
    "id" TEXT NOT NULL,
    "assets" DECIMAL(19,4) NOT NULL,
    "liabilities" DECIMAL(19,4) NOT NULL,
    "ownersEquity" DECIMAL(19,4) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "organisationId" TEXT NOT NULL,

    CONSTRAINT "AccountingEquation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountingEquation" ADD CONSTRAINT "AccountingEquation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountingEquation" ADD CONSTRAINT "AccountingEquation_organisationId_fkey" FOREIGN KEY ("organisationId") REFERENCES "Organisation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
