export const ErrorDictionary = {
  DB_CONNECTION_ERROR: {
    status: 503,
    message: "Servicio temporalmente no disponible. Error de conexión a la base de datos"
  },
  PRISMA_QUERY_ERROR: {
    status: 400,
    message: "Error en la consulta a la base de datos"
  },
  ITEM_NOT_FOUND: {
    status: 404,
    message: "No se encontró el item solicitado"
  },
  ITEMS_NOT_FOUND: {
    status: 400,
    message: "No se encontraron items en la actividad solicitada"
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Error interno del servidor"
  }
}

export type ErrorCode = keyof typeof ErrorDictionary;