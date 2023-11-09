/*
  Warnings:

  - You are about to drop the column `isFlash` on the `Picture` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Picture" DROP COLUMN "isFlash";

-- AlterTable
ALTER TABLE "Tattoo" ADD COLUMN     "isFlash" BOOLEAN NOT NULL DEFAULT false;
