/*
  Warnings:

  - You are about to drop the column `costumer` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `customer` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Type" ADD VALUE 'RELATION';

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "costumer",
ADD COLUMN     "customer" TEXT NOT NULL;
