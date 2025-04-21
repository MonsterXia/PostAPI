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
    "country_1" TEXT NOT NULL,
    "battle_group_1" TEXT NOT NULL,
    "country_2" TEXT NOT NULL,
    "battle_group_2" TEXT NOT NULL,
    "acceptance" REAL NOT NULL
);
