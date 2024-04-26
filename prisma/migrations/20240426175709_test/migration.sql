/*
  Warnings:

  - You are about to drop the column `birth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "birth",
DROP COLUMN "genre";
