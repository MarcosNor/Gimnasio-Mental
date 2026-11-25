/**
 * Verifica si un número de cuenta es válido 
 */
export const validarNumeroCuenta = (numCuenta: number): boolean => {
  const numStr = numCuenta.toString();

  if (numStr.length !== 9) {
    return false;
  }

  let impar = 0;
  let par = 0;

  // Iteramos sobre los primeros 8 dígitos
  for (let i = 0; i < 8; i++) {
    const digito = parseInt(numStr.charAt(i), 10);
    
    // Si el índice es par (0, 2, 4, 6)
    if (i % 2 === 0) {
      impar += digito;
    } else { // Si el índice es impar (1, 3, 5, 7)
      par += digito;
    }
  }

  impar *= 3;
  par *= 7;

  const digitoCalculado = (par + impar) % 10;
  const digitoVerificador = parseInt(numStr.charAt(8), 10);

  return digitoCalculado === digitoVerificador;
};