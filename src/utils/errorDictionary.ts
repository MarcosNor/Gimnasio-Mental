export const ErrorDictionary = {
  DB_CONNECTION_ERROR: {
    status: 503,
    message: "Servicio temporalmente no disponible."
  },
  PRISMA_QUERY_ERROR: {
    status: 400,
    message: "Error en la consulta a la base de datos"
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "Usuario no encontrado"
  },
  PREV_USER: {
    status: 409,
    message: "El usuario ya existe"
  },
  NO_TOKEN: {
    status: 401,
    message: "No hubo verificación"
  },
  MISSING_FIELDS: {
    status: 400,
    message: "Faltan campos requeridos"
  },
  ITEM_NOT_FOUND: {
    status: 404,
    message: "No se encontró el item solicitado"
  },
  ITEMS_NOT_FOUND: {
    status: 400,
    message: "No se encontraron items en la actividad solicitada"
  },
  CAT_NOT_FOUND: {
    status: 404,
    message: "No se encontró la categoria solicitada"
  },
  ACT_NOT_FOUND: {
    status: 404,
    message: "No se encontró la actividad"
  },
  ROUTE_NOT_FOUND: {
    status: 404,
    message: "La ruta solicitada no existe"
  },
  BAD_REQUEST:{
    status: 400,
    message: "No se pudo procesar la solicitud"
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Error interno del servidor"
  }
} as const;

export type ErrorCode = keyof typeof ErrorDictionary;