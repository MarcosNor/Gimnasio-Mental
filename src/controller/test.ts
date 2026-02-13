import { CategoriaModel } from '../model/categoria.js';

async function test () {

  console.log("----obteniendo categorias----");
  const categorias = await CategoriaModel.getAll();
  console.log(categorias);

  console.log("----creando categoria----");
  const nuevacategoria = await CategoriaModel.create({
    input: {
      nombre: "Espacial",
      beneficios: "Relacionar estímulos en función de su posición o ubicación en el espacio"
    }
  })
  console.log(nuevacategoria);

  console.log("----eliminando categoria----");
  const eliminacion = await CategoriaModel.delete({ nombre: "Espacial" });
  console.log(eliminacion);

  console.log("----buscando por id----");
  const id = await CategoriaModel.getById({idCategoria: 2});
  console.log(id);

}

test();