/*
  Warnings:

  - You are about to drop the column `createdAt` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `post` DROP COLUMN `createdAt`,
    DROP COLUMN `published`,
    DROP COLUMN `updatedAt`;
