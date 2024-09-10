/*
  Warnings:

  - You are about to drop the column `title` on the `Ticket` table. All the data in the column will be lost.
  - The `status` column on the `Ticket` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `costumer` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehicle` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('SUPPORT', 'SELLING', 'OPERATIONAL');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE');

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "title",
ADD COLUMN     "costumer" TEXT NOT NULL,
ADD COLUMN     "reason" TEXT NOT NULL,
ADD COLUMN     "type" "Type" NOT NULL,
ADD COLUMN     "vehicle" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'TODO';
