DROP SCHEMA IF EXISTS gimnasio_mental;
CREATE DATABASE gimnasio_mental;
USE gimnasio_mental;

-- Transaction

SELECT email, password FROM usuario;

-- -----------TABLAS CON LLAVES PRIMARIAS-----------------

-- Tabla usuario
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    contrasena VARCHAR(255) NOT NULL,
    num_cta INT UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Restricciones usuario
ALTER TABLE usuario ADD CONSTRAINT chk_9_digitos 
CHECK (num_cta BETWEEN 100000000 AND 999999999);

-- catalogo

-- Tabla categoria
CREATE TABLE cat_categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    beneficios TEXT DEFAULT NULL,
    slug VARCHAR(100) UNIQUE DEFAULT NULL,
    portada VARCHAR(255) DEFAULT NULL
);

-- -----------TABLAS CON LLAVES FORANEAS-----------------

-- Tabla actividad
CREATE TABLE actividad (
  id_actividad INT AUTO_INCREMENT PRIMARY KEY,
  id_categoria INT NOT NULL,
  nombre VARCHAR(100) NOT NULL UNIQUE,
  explicacion TEXT DEFAULT NULL,
  tiempoLimite INT DEFAULT NULL,
  estatus_actividad BOOLEAN DEFAULT FALSE,
  slug VARCHAR(100) UNIQUE DEFAULT NULL,
  portada VARCHAR(255) DEFAULT NULL,

  CONSTRAINT fk_actividad_categoria FOREIGN KEY (id_categoria) REFERENCES cat_categoria(id_categoria)
    ON DELETE CASCADE ON UPDATE CASCADE
);

select * from actividad;

-- Tabla stat_usuario
CREATE TABLE stat_usuario (
  id_usuario INT NOT NULL,
  id_actividad INT NOT NULL,
  record_personal INT DEFAULT 0,
  -- record malo
  total_partidas INT DEFAULT 0,

  PRIMARY KEY (id_usuario, id_actividad),
  CONSTRAINT fk_stat_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_stat_actividad FOREIGN KEY (id_actividad) REFERENCES actividad(id_actividad)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tabla item (Entidad débil)
CREATE TABLE item (
    id_item INT AUTO_INCREMENT PRIMARY KEY,
    id_actividad INT NOT NULL,
    pregunta VARCHAR(255) NOT NULL,
    estatus_activo BOOLEAN DEFAULT FALSE,
    dificultad ENUM('1', '2', '3') NOT NULL,


    CONSTRAINT fk_item_actividad FOREIGN KEY (id_actividad) REFERENCES actividad(id_actividad)
    ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE respuesta (
    id_respuesta INT AUTO_INCREMENT PRIMARY KEY,
    id_item INT NOT NULL,
    text_respuesta VARCHAR(255) NOT NULL,
    activo BOOLEAN DEFAULT TRUE,
    correcta BOOLEAN NOT NULL,

    CONSTRAINT fk_respuesta_item FOREIGN KEY (id_item) REFERENCES item(id_item)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE partida (
	id_partida INT AUTO_INCREMENT PRIMARY KEY,
    id_actividad INT NOT NULL,
    id_usuario INT NOT NULL,
    puntuacion INT DEFAULT 0,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT fk_partida_actividad FOREIGN KEY (id_actividad) REFERENCES actividad(id_actividad)
    ON DELETE RESTRICT ON UPDATE CASCADE,
    
    CONSTRAINT fk_partida_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
    ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE estadistica (
    id_partida INT PRIMARY KEY,
    
    aciertos_facil INT DEFAULT 0,
    total_facil INT DEFAULT 0,
    
    aciertos_medio INT DEFAULT 0,
    total_medio INT DEFAULT 0,
    
    aciertos_dificil INT DEFAULT 0,
    total_dificil INT DEFAULT 0,
    
    CONSTRAINT fk_aciertos_partida FOREIGN KEY (id_partida) REFERENCES partida(id_partida)
    ON DELETE CASCADE ON UPDATE CASCADE
);

select * from usuario;
