import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mydatabase.db");

export default db;
