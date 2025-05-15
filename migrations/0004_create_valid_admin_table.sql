-- CreateTable
CREATE TABLE "ValidAdmin" (
    "username" TEXT NOT NULL PRIMARY KEY,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
