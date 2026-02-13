import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  const csvFilePath = path.join(__dirname, 'items_prueba.csv');
  const items: any[] = [];

  console.log('Iniciando carga de ítems...');

  const actividad = await prisma.actividad.findUnique({
    where: { id_actividad: 1 }
  });

  if (!actividad) {
    throw new Error("Error: No se encontró la actividad con ID 1 en la base de datos.");
  }

  const parser = fs.createReadStream(csvFilePath).pipe(csv());

  for await (const row of parser) {
    const dificultadMap = 
      row.dificultad === '1' ? 'FACIL' : 
      row.dificultad === '2' ? 'MEDIO' : 'DIFICIL';

    items.push({
      id_actividad: 1,
      pregunta: row.pregunta,
      estatus_activo: row.estatus_activo.toLowerCase() === 'true',
      respuesta_c: row.respuesta_c,
      respuestas_i: JSON.parse(row.respuestas_i),
      dificultad: dificultadMap
    });
  }

  // 3. Insertar en la tabla 'item'
  const result = await prisma.item.createMany({
    data: items,
    skipDuplicates: true,
  });

  console.log(`Proceso terminado Se agregaron ${result.count} ítems a la actividad: ${actividad.nombre}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });