import { CategoriaModel } from './categoria.js'

async function test () {
  const categorias = await CategoriaModel.getAll()
  console.log(categorias)

  console.log("buscando por id")
  const id = await CategoriaModel.getById(1)
  console.log(id)

}

test();