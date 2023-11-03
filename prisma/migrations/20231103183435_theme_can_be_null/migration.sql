-- DropForeignKey
ALTER TABLE "Picture" DROP CONSTRAINT "Picture_themeId_fkey";

-- AlterTable
ALTER TABLE "Picture" ALTER COLUMN "themeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Picture" ADD CONSTRAINT "Picture_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;
