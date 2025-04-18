// Utilitaires pour la base de données
const { pool } = require("../db/config");

// Exécuter une requête simple
async function query(sql, params) {
  try {
    const [rows, fields] = await pool.execute(sql, params || []);
    return rows;
  } catch (error) {
    console.error("Erreur SQL:", error);
    throw error;
  }
}

// Récupérer un seul enregistrement
async function queryOne(sql, params) {
  const rows = await query(sql, params);
  return rows[0];
}

// Insérer des données et récupérer l'ID généré
async function insert(table, data) {
  try {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => "?").join(", ");

    const sql = `INSERT INTO ${table} (${keys.join(
      ", "
    )}) VALUES (${placeholders})`;

    const [result] = await pool.execute(sql, values);
    return result.insertId;
  } catch (error) {
    console.error("Erreur lors de l'insertion:", error);
    throw error;
  }
}

// Mettre à jour des données
async function update(table, data, condition, conditionParams) {
  try {
    const updates = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");
    const values = [...Object.values(data), ...conditionParams];

    const sql = `UPDATE ${table} SET ${updates} WHERE ${condition}`;

    const [result] = await pool.execute(sql, values);
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    throw error;
  }
}

// Supprimer des enregistrements
async function remove(table, condition, params) {
  try {
    const sql = `DELETE FROM ${table} WHERE ${condition}`;

    const [result] = await pool.execute(sql, params);
    return result.affectedRows;
  } catch (error) {
    console.error("Erreur lors de la suppression:", error);
    throw error;
  }
}

// Transaction
async function transaction(callback) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();
    const result = await callback(connection);
    await connection.commit();
    return result;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

module.exports = {
  query,
  queryOne,
  insert,
  update,
  remove,
  transaction,
};
