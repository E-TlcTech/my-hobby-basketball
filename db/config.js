// db/config.js
const mysql = require("mysql2/promise");

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "my_hobby_basketball",
};

async function getConnection() {
  try {
    return await mysql.createConnection(dbConfig);
  } catch (error) {
    console.error("Erreur de connexion à la base de données:", error);
    throw error;
  }
}

async function testConnection() {
  try {
    const connection = await getConnection();
    await connection.end();
    return true;
  } catch (error) {
    console.error("Test de connexion échoué:", error);
    return false;
  }
}

module.exports = {
  getConnection,
  testConnection,
};
