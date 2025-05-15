-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ValidAdmin" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
INSERT INTO "new_ValidAdmin" ("organization", "password", "role", "username") SELECT "organization", "password", "role", "username" FROM "ValidAdmin";
DROP TABLE "ValidAdmin";
ALTER TABLE "new_ValidAdmin" RENAME TO "ValidAdmin";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
