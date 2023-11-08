/*
  Warnings:

  - Made the column `image` on table `Theme` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Theme" ALTER COLUMN "image" SET NOT NULL;
