// test-db.js
require("dotenv").config({ path: ".env.local" });
const { testConnection } = require("./db/config");

async function run() {
  const connected = await testConnection();
  if (connected) {
    console.log("La connexion à la base de données fonctionne correctement!");
  } else {
    console.error("Impossible de se connecter à la base de données");
  }
  process.exit();
}

run();
