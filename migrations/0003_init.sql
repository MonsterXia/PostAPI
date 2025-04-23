-- CreateTable
CREATE TABLE "BattleGroupScores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "battle_group" TEXT NOT NULL,
    "score" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "LayerAcceptance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "country1" TEXT NOT NULL,
    "battle_group1" TEXT NOT NULL,
    "country2" TEXT NOT NULL,
    "battle_group2" TEXT NOT NULL,
    "score" REAL NOT NULL
);
