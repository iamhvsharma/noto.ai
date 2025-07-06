/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `title` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WORK', 'PERSONAL', 'RESEARCH', 'MEETINGS', 'IDEAS');

-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "category" "Category",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name";
