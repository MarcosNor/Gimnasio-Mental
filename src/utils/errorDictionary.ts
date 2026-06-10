export const ErrorDictionary = {
  DB_CONNECTION_ERROR: {
    status: 503,
    message: "Servicio temporalmente no disponible."
  },
  PRISMA_QUERY_ERROR: {
    status: 500,
    message: "Error en la consulta a la base de datos"
  },
  USER_NOT_FOUND: {
    status: 404,
    message: "Usuario no encontrado"
  },
  PREV_USER: {
    status: 409,
    message: "Correo o número de cuenta ya está en uso"
  },
  NO_TOKEN: {
    status: 401,
    message: "Falta identidad"
  },
  MISSING_FIELDS: {
    status: 400,
    message: "Faltan campos obligatorios"
  },
  VALIDATION_ERROR: {
    status: 400,
    message: "Error de validación"
  },
  ITEM_NOT_FOUND: {
    status: 404,
    message: "No se encontró el item solicitado"
  },
  ITEMS_NOT_FOUND: {
    status: 404,
    message: "No se encontraron items en la actividad solicitada"
  },
  THERE_IS_NO_ACTIVITY: {
    status: 404,
    message: "No hay juego asociado a esta actividad"
  },
  THERE_IS_NO_STATS: {
    status: 404,
    message: "No hay partidas de este usuario en esta actividad"
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
  DATOS_ERRONEOS: {
    status: 400,
    message: "Los datos proporcionados son incorrectos"
  },
  MISSING_CAPTCHA: {
    status: 400,
    message: "Captcha requerido"
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