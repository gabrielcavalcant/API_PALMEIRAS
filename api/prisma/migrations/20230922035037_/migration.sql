-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "skill" TEXT NOT NULL
);
INSERT INTO "new_players" ("id", "name", "position", "skill") SELECT "id", "name", "position", "skill" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
