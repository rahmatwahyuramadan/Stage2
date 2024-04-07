/*
  Warnings:

  - You are about to drop the column `categoryImage` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "categoryImage";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("category") ON DELETE RESTRICT ON UPDATE CASCADE;
