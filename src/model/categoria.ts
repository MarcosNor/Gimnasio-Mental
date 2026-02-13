import { db } from './db.js';

export class CategoriaModel {
  static async getAll () {
    const [categorias] = await db.query(
      `SELECT 
        id_categoria,
        nombre,
        beneficios
       FROM categoria;`
    )

    return categorias
  }

  static async create ({ input }) {
    const { 
      nombre, 
      beneficios 
    } = input

    const [insercion] = await db.query(
      `INSERT INTO categoria (nombre, beneficios) VALUES (?, ?);`,
      [nombre, beneficios]
    );

    return {
      id_categoria: insercion.insertId,
      nombre,
      beneficios
    }
  }

  static async delete ({ nombre }) {
    const [categorias] = await db.query(
      `SELECT * FROM categoria WHERE nombre = ?;`,
      [nombre]
    );

    if (categorias.length === 0) return null

    const categoria = categorias[0]

    await db.query(
      `DELETE FROM categoria WHERE nombre = ?;`,
      [categoria.nombre]
    );

    return categoria
  }

  static async getById ({ idCategoria }) {
    const [categorias] = await db.query(
      `SELECT * FROM categoria WHERE id_categoria = ?;`,
      [idCategoria]
    );

    if (categorias.length === 0) return null

    return categorias[0]
  }


}