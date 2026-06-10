SELECT * FROM gimnasio_mental.cat_categoria;

INSERT INTO cat_categoria (nombre, beneficios)
VALUES
  ('Coordinación', 'Relacionar dos o más estímulos de manera simultánea'),
  ('Comparación', 'Establecer relaciones de similitud o diferencia entre dos o más estímulos.'),
  ('Oposición', 'Relacionar estímulos que se contraponen o son opuestos en algún aspecto.'),
  ('Espacial', 'Relacionar estímulos en función de su posición o ubicación en el espacio.'),
  ('Temporal', 'Relacionar estímulos en función de su posición o secuencia en el tiempo.'),
  ('Condicionalidad', 'Relacionar estímulos en función de condiciones o criterios específicos.'),
  ('Jerárquico', 'Relacionar estímulos en función de su posición en una estructura jerárquica o de orden.'),
  ('Deíctico', 'Relacionar estímulos en función del contexto o punto de referencia específico.');
  
UPDATE actividad SET tiempoLimite = 30 WHERE nombre = 'Coordinación';
UPDATE cat_categoria SET slug = 'comparacion' WHERE nombre = 'Comparación';
UPDATE cat_categoria SET slug = 'oposicion' WHERE nombre = 'Oposición';
UPDATE cat_categoria SET slug = 'espacial' WHERE nombre = 'Espacial';
UPDATE cat_categoria SET slug = 'temporal' WHERE nombre = 'Temporal';
UPDATE cat_categoria SET slug = 'condicionalidad' WHERE nombre = 'Condicionalidad';
UPDATE cat_categoria SET slug = 'jerarquico' WHERE nombre = 'Jerárquico';
UPDATE actividad SET estatus_actividad = true WHERE id_actividad = 2;

update respuesta set id_item = 51 where id_respuesta = 204;

select * from respuesta;
select * from item;

update actividad set estatus_actividad = TRUE where id_actividad = 2;
  
INSERT INTO actividad (id_categoria, nombre, explicacion, tiempoLimite, estatus_actividad) VALUES
(1, 'Coordinación', 'Preguntas sencillas para relacionar dos o más temas', 60, TRUE);

INSERT INTO actividad (id_categoria, nombre, explicacion, tiempoLimite, estatus_actividad) VALUES
(1, 'Actividad 2', 'Actividad de prueba', 60, TRUE);

INSERT INTO actividad (id_categoria, nombre, explicacion, tiempoLimite, estatus_actividad) VALUES
(2, 'Actividad de comparación', 'Actividad de prueba', 60, TRUE);

select * from actividad;
select * from usuario;

select * from cat_categoria;

INSERT INTO item (id_item, id_actividad, pregunta, estatus_activo, dificultad) VALUES
(1, 1, 'Si ''Xyl'' es idéntico a ''Xyl'', ¿cuál es el par de ''Xyl''?', 1, '1'),
(2, 1, 'Relaciona el símbolo [####] con su equivalente exacto:', 1, '1'),
(3, 1, 'Si ''Bra'' es igual a ''Ket'', ¿qué es ''Bra''?', 1, '1'),
(4, 1, 'Si ''1010'' es ''Alfa'', ¿qué es ''1010''?', 1, '1'),
(5, 1, 'Empareja el código ''Z-99'' con su igual:', 1, '1'),
(6, 1, 'Si ''Luna'' se escribe como ''0-0'', ¿cómo se escribe ''Luna''?', 1, '1'),
(7, 1, 'Si ''Pato'' es igual a ''Tapa'', ¿qué es ''Pato''?', 1, '1'),
(8, 1, 'Identifica el gemelo de ''<<<O>>>'':', 1, '1'),
(9, 1, 'Si ''Rojo'' equivale a ''Círculo'', ¿qué es ''Rojo''?', 1, '1'),
(10, 1, 'Si ''A'' = ''B'', entonces ''A'' es:', 1, '1'),
(11, 1, 'Selecciona el equivalente a ''---*---'':', 1, '1'),
(12, 1, 'Si ''Norte'' es ''S1'', ¿Norte es?', 1, '1'),
(13, 1, 'Si ''M-1'' es ''X'', ¿qué es ''M-1''?', 1, '1'),
(14, 1, '¿Cuál es el par de ''J-K-L''?', 1, '1'),
(15, 1, 'Si ''Pez'' es ''A-1'', ''A-1'' es:', 1, '1'),
(16, 1, 'Si ''Sol'' = ''X'' y ''X'' = ''Y'', ¿''Sol'' es igual a?', 1, '2'),
(17, 1, 'Si ''Gato'' = ''7'' y ''7'' = ''F'', ¿''Gato'' es?', 1, '2'),
(18, 1, 'Si ''44'' = ''Azul'' y ''Azul'' = ''99'', ¿''44'' es?', 1, '2'),
(19, 1, 'Si ''A'' = ''1'' y ''B'' = ''1'', ¿''A'' es igual a ''B''?', 1, '2'),
(20, 1, 'Si ''Delta'' = ''Epsilon'' y ''Epsilon'' = ''Zeta'', ¿''Delta'' es?', 1, '2'),
(21, 1, 'Si ''Triángulo'' = ''3'' y ''3'' = ''T'', ¿''T'' es?', 1, '2'),
(22, 1, 'Si ''Rápido'' = ''F'' y ''F'' = ''S'', ¿''Rápido'' es?', 1, '2'),
(23, 1, 'Si ''X'' = ''Z'' y ''Z'' = ''W'', ¿''X'' es ''W''?', 1, '2'),
(24, 1, 'Si ''Color'' = ''M'' y ''M'' = ''N'', ¿''Color'' es?', 1, '2'),
(25, 1, 'Si ''J'' = ''8'' y ''8'' = ''K'', ¿''J'' es?', 1, '2'),
(26, 1, 'Si ''H'' = ''O'' y ''O'' = ''H'', ¿''H'' es ''O''?', 1, '2'),
(27, 1, 'Si ''P'' = ''Q'' y ''Q'' = ''10'', ¿''P'' es?', 1, '2'),
(28, 1, 'Si ''Inicio'' = ''Fin'' y ''Fin'' = ''Punto'', ¿''Inicio'' es?', 1, '2'),
(29, 1, 'Si ''R'' = ''S'' y ''S'' = ''T'', ¿''R'' es ''T''?', 1, '2'),
(30, 1, 'Si ''90'' = ''A'' y ''A'' = ''B'', ¿''90'' es?', 1, '2'),
(31, 1, 'Si ''V'' = ''1'' y ''W'' = ''1'', entonces ''V'' y ''W'' son:', 1, '2'),
(32, 1, 'Si ''Coche'' = ''Motor'' y ''Motor'' = ''Hierro'', ¿''Coche'' es?', 1, '2'),
(33, 1, 'Si ''Luz'' = ''On'' y ''On'' = ''1'', ¿''Luz'' es?', 1, '2'),
(34, 1, 'Si ''A'' = ''B'', ''B'' = ''C'' y ''C'' = ''D'', ¿''A'' es?', 1, '2'),
(35, 1, 'Si ''Alfa'' = ''Omega'', ¿''Omega'' es?', 1, '2'),
(36, 1, 'Si ''A''=''B'', ''B''=''C'', ''C''=''D'', ''D''=''E'', ¿''A'' es igual a ''E''?', 1, '3'),
(37, 1, 'Si ''X'' es igual a ''Y'', y ''Y'' no es ''Z'', ¿es ''X'' igual a ''Z''?', 1, '3'),
(38, 1, 'Si ''P'' = ''Q'' y ''R'' = ''Q'', ¿entonces ''P'' es igual a ''R''?', 1, '3'),
(39, 1, 'Si ''1''=''A'', ''2''=''B'', y ''A''=''2'', ¿es ''1'' igual a ''B''?', 1, '3'),
(40, 1, 'Si ''Sol''=''Luna'' y ''Luna''=''Estrella'', pero ''Estrella''=''Nube'', ¿''Sol'' es?', 1, '3'),
(41, 1, 'Si ''Gato'' no es ''Perro'' y ''Perro'' es ''Can'', ¿es ''Gato'' un ''Can''?', 1, '3'),
(42, 1, 'Si ''A''=''1'', ''B''=''2'', ''C''=''3''. Si cambio ''1'' por ''C'', ¿''A'' es?', 1, '3'),
(43, 1, 'Si ''X'' es ''Y'' solo si ''Z'' es ''W''. Si ''Z'' es ''W'', ¿''X'' es ''Y''?', 1, '3'),
(44, 1, 'Si ''Azul'' = ''Frío'' y ''Rojo'' = ''Calor'', y ''Frío'' = ''Rojo'', ¿''Azul'' es?', 1, '3'),
(45, 1, 'Si ''A''=''B'', ''C''=''D'', y ''B''=''C'', ¿es ''A'' igual a ''D''?', 1, '3'),
(46, 1, 'Si todo ''A'' es ''B'', y ''X'' es ''A'', ¿''X'' es ''B''?', 1, '3'),
(47, 1, 'Si ''M''=''N'' y ''N''=''M'', y ''M''=''P'', ¿es ''P'' igual a ''N''?', 1, '3'),
(48, 1, 'Si ''A'' es lo mismo que ''B'', pero ''B'' es diferente de ''C'', ¿''A'' es ''C''?', 1, '3'),
(49, 1, 'Si ''Izquierda''=''I'' y ''I''=''Derecha'', ¿''Izquierda'' es ''Derecha''?', 1, '3'),
(50, 1, 'Si ''A''=''B'', ''B''=''C'', ''C''=''A''. ¿Son todos iguales entre sí?', 1, '3');

INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(1, 'Xyl', 1, 1), (1, 'Xly', 1, 0), (1, 'Ylx', 1, 0), (1, 'Lxy', 1, 0),
(2, '[####]', 1, 1), (2, '[###]', 1, 0), (2, '[#####]', 1, 0), (2, '[#] ', 1, 0),
(3, 'Ket', 1, 1), (3, 'Bra', 1, 0), (3, 'Tek', 1, 0), (3, 'Bre', 1, 0),
(4, 'Alfa', 1, 1), (4, '1010', 1, 0), (4, 'Beta', 1, 0), (4, '0101', 1, 0),
(5, 'Z-99', 1, 1), (5, 'Z-98', 1, 0), (5, '99-Z', 1, 0), (5, 'A-99', 1, 0),
(6, '0-0', 1, 1), (6, '0-1', 1, 0), (6, '1-0', 1, 0), (6, '0-0-0', 1, 0),
(7, 'Tapa', 1, 1), (7, 'Pato', 1, 0), (7, 'Pata', 1, 0), (7, 'Tapo', 1, 0),
(8, '<<<O>>>', 1, 1), (8, '<<O>>', 1, 0), (8, '<<<0>>>', 1, 0), (8, '>>>O<<<', 1, 0),
(9, 'Círculo', 1, 1), (9, 'Rojo', 1, 0), (9, 'Azul', 1, 0), (9, 'Cuadrado', 1, 0),
(10, 'B', 1, 1), (10, 'A', 1, 0), (10, 'C', 1, 0), (10, 'D', 1, 0),
(11, '---*---', 1, 1), (11, '--*--', 1, 0), (11, '---#---', 1, 0), (11, '-*-*-*-', 1, 0),
(12, 'S1', 1, 1), (12, 'Norte', 1, 0), (12, 'S2', 1, 0), (12, 'Sur', 1, 0),
(13, 'X', 1, 1), (13, 'M', 1, 0), (13, '1', 1, 0), (13, 'Y', 1, 0),
(14, 'J-K-L', 1, 1), (14, 'L-K-J', 1, 0), (14, 'J-L-K', 1, 0), (14, 'K-L-J', 1, 0),
(15, 'Pez', 1, 1), (15, 'A-2', 1, 0), (15, '1-A', 1, 0), (15, 'Mar', 1, 0),
(16, 'Y', 1, 1), (16, 'Sol', 1, 0), (16, 'X', 1, 0), (16, 'Z', 1, 0),
(17, 'F', 1, 1), (17, 'Gato', 1, 0), (17, '7', 1, 0), (17, 'G', 1, 0),
(18, '99', 1, 1), (18, '44', 1, 0), (18, 'Azul', 1, 0), (18, '100', 1, 0),
(19, 'Sí', 1, 1), (19, 'No', 1, 0), (19, 'Tal vez', 1, 0), (19, 'Nunca', 1, 0),
(20, 'Zeta', 1, 1), (20, 'Delta', 1, 0), (20, 'Alfa', 1, 0), (20, 'Epsilon', 1, 0),
(21, 'Triángulo', 1, 1), (21, '3', 1, 0), (21, 'T', 1, 0), (21, 'Círculo', 1, 0),
(22, 'S', 1, 1), (22, 'F', 1, 0), (22, 'Rápido', 1, 0), (22, 'Lento', 1, 0),
(23, 'Sí', 1, 1), (23, 'No', 1, 0), (23, 'Solo Z', 1, 0), (23, 'Ninguna', 1, 0),
(24, 'N', 1, 1), (24, 'M', 1, 0), (24, 'Color', 1, 0), (24, 'P', 1, 0),
(25, 'K', 1, 1), (25, '8', 1, 0), (25, 'J', 1, 0), (25, 'L', 1, 0),
(26, 'Sí', 1, 1), (26, 'No', 1, 0), (26, 'A veces', 1, 0), (26, 'Nunca', 1, 0),
(27, '10', 1, 1), (27, 'P', 1, 0), (27, 'Q', 1, 0), (27, '11', 1, 0),
(28, 'Punto', 1, 1), (28, 'Inicio', 1, 0), (28, 'Fin', 1, 0), (28, 'Meta', 1, 0),
(29, 'Sí', 1, 1), (29, 'No', 1, 0), (29, 'Solo S', 1, 0), (29, 'Tal vez', 1, 0),
(30, 'B', 1, 1), (30, '90', 1, 0), (30, 'A', 1, 0), (30, 'C', 1, 0),
(31, 'Iguales', 1, 1), (31, 'Diferentes', 1, 0), (31, 'Opuestos', 1, 0), (31, 'Inversos', 1, 0),
(32, 'Hierro', 1, 1), (32, 'Coche', 1, 0), (32, 'Motor', 1, 0), (32, 'Rueda', 1, 0),
(33, '1', 1, 1), (33, 'Luz', 1, 0), (33, 'On', 1, 0), (33, '0', 1, 0),
(34, 'D', 1, 1), (34, 'B', 1, 0), (34, 'C', 1, 0), (34, 'E', 1, 0),
(35, 'Alfa', 1, 1), (35, 'Beta', 1, 0), (35, 'Gamma', 1, 0), (35, 'Omega', 1, 0),
(36, 'Sí', 1, 1), (36, 'No', 1, 0), (36, 'Casi', 1, 0), (36, 'Solo a B', 1, 0),
(37, 'No', 1, 1), (37, 'Sí', 1, 0), (37, 'Tal vez', 1, 0), (37, 'Siempre', 1, 0),
(38, 'Sí', 1, 1), (38, 'No', 1, 0), (38, 'Solo si Q es 0', 1, 0), (38, 'Nunca', 1, 0),
(39, 'Sí', 1, 1), (39, 'No', 1, 0), (39, 'No se puede saber', 1, 0), (39, '1 es A', 1, 0),
(40, 'Nube', 1, 1), (40, 'Sol', 1, 0), (40, 'Luna', 1, 0), (40, 'Lluvia', 1, 0),
(41, 'No', 1, 1), (41, 'Sí', 1, 0), (41, 'A veces', 1, 0), (41, 'Solo en parte', 1, 0),
(42, '3', 1, 1), (42, '1', 1, 0), (42, '2', 1, 0), (42, 'A', 1, 0),
(43, 'Sí', 1, 1), (43, 'No', 1, 0), (43, 'Solo si Y es X', 1, 0), (43, 'Nunca', 1, 0),
(44, 'Calor', 1, 1), (44, 'Frío', 1, 0), (44, 'Azul', 1, 0), (44, 'Rojo', 1, 0),
(45, 'Sí', 1, 1), (45, 'No', 1, 0), (45, 'Tal vez', 1, 0), (45, 'Solo A=C', 1, 0),
(46, 'Sí', 1, 1), (46, 'No', 1, 0), (46, 'No se sabe', 1, 0), (46, 'X es A', 1, 0),
(47, 'Sí', 1, 1), (47, 'No', 1, 0), (47, 'Solo a M', 1, 0), (47, 'Depende', 1, 0),
(48, 'No', 1, 1), (48, 'Sí', 1, 0), (48, 'A veces', 1, 0), (48, 'Siempre', 1, 0),
(49, 'Sí', 1, 1), (49, 'No', 1, 0), (49, 'Nunca', 1, 0), (49, 'I es I', 1, 0),
(50, 'Sí', 1, 1), (50, 'No', 1, 0), (50, 'Solo A y B', 1, 0), (50, 'Solo B y C', 1, 0);

select * from respuesta;

INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Sol'' es igual a ''9-9'', ¿cómo se escribe ''Sol''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(1, '9-9', TRUE, TRUE),
(1, '9-0', TRUE, FALSE),
(1, '0-9', TRUE, FALSE),
(1, '9-9-9', TRUE, FALSE);


-- Pregunta 2
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Encuentra la réplica exacta de ''##@@##'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(52, '#@@###', TRUE, FALSE),
(52, '##@@##', TRUE, TRUE),
(52, '##@@@#', TRUE, FALSE),
(52, '#@#@#@', TRUE, FALSE);

-- Pregunta 3
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Azul'' equivale a ''Cuadrado'', ¿qué es ''Azul''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(53, 'Azul', TRUE, FALSE),
(53, 'Triángulo', TRUE, FALSE),
(53, 'Cuadrado', TRUE, TRUE),
(53, 'Círculo', TRUE, FALSE);

-- Pregunta 4
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, '¿Cuál es el gemelo idéntico de ''XYZ-123''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(54, 'XYX-123', TRUE, FALSE),
(54, 'XYZ-132', TRUE, FALSE),
(54, 'XZY-123', TRUE, FALSE),
(54, 'XYZ-123', TRUE, TRUE);

-- Pregunta 5
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''C'' = ''D'', entonces ''C'' es:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(55, 'D', TRUE, TRUE),
(55, 'C', TRUE, FALSE),
(55, 'E', TRUE, FALSE),
(55, 'A', TRUE, FALSE);

-- Pregunta 6
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Verde'' es ''G1'', ¿''Verde'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(56, 'G2', TRUE, FALSE),
(56, 'G1', TRUE, TRUE),
(56, 'V1', TRUE, FALSE),
(56, 'G0', TRUE, FALSE);

-- Pregunta 7
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Selecciona el equivalente a ''===+==='':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(57, '==++===', TRUE, FALSE),
(57, '===+===', TRUE, FALSE),
(57, '===+===', TRUE, TRUE),
(57, '=+=====', TRUE, FALSE);

-- Pregunta 8
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''K-9'' es ''Perro'', ¿qué es ''K-9''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(58, 'K-9', TRUE, FALSE),
(58, 'Gato', TRUE, FALSE),
(58, 'Pájaro', TRUE, FALSE),
(58, 'Perro', TRUE, TRUE);

-- Pregunta 9
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, '¿Cuál es el par de ''A-B-C-D''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(59, 'A-B-C-D', TRUE, TRUE),
(59, 'A-B-D-C', TRUE, FALSE),
(59, 'A-C-B-D', TRUE, FALSE),
(59, 'B-A-C-D', TRUE, FALSE);

-- Pregunta 10
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Roma'' es igual a ''Amor'', ¿qué es ''Roma''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(60, 'Roma', TRUE, FALSE),
(60, 'Amor', TRUE, TRUE),
(60, 'Ramo', TRUE, FALSE),
(60, 'Mora', TRUE, FALSE);

-- Pregunta 11
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''555'' es ''Fuego'', ¿qué es ''555''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(61, '555', TRUE, FALSE),
(61, 'Agua', TRUE, FALSE),
(61, 'Fuego', TRUE, TRUE),
(61, 'Tierra', TRUE, FALSE);

-- Pregunta 12
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Identifica el duplicado exacto de ''(((X)))'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(62, '((X))', TRUE, FALSE),
(62, '(((Y)))', TRUE, FALSE),
(62, '(((X))', TRUE, FALSE),
(62, '(((X)))', TRUE, TRUE);

-- Pregunta 13
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Gato'' es ''Miau'', ¿''Miau'' representa a?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(63, 'Gato', TRUE, TRUE),
(63, 'Perro', TRUE, FALSE),
(63, 'Miau', TRUE, FALSE),
(63, 'Vaca', TRUE, FALSE);

-- Pregunta 14
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Relaciona el código ''W-88'' con su igual:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(64, 'W-89', TRUE, FALSE),
(64, 'W-88', TRUE, TRUE),
(64, '88-W', TRUE, FALSE),
(64, 'M-88', TRUE, FALSE);

-- Pregunta 15
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Arriba'' es ''U-1'', ¿''Arriba'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(65, 'D-1', TRUE, FALSE),
(65, 'U-2', TRUE, FALSE),
(65, 'U-1', TRUE, TRUE),
(65, 'U-0', TRUE, FALSE);

-- Pregunta 16
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''T'' es idéntico a ''T'', ¿cuál es el par de ''T''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(66, 'F', TRUE, FALSE),
(66, 't', TRUE, FALSE),
(66, 'X', TRUE, FALSE),
(66, 'T', TRUE, TRUE);

-- Pregunta 17
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''1234'' es ''Número'', ¿qué es ''1234''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(67, 'Número', TRUE, TRUE),
(67, '1234', TRUE, FALSE),
(67, 'Letra', TRUE, FALSE),
(67, 'Signo', TRUE, FALSE);

-- Pregunta 18
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Encuentra la pareja idéntica de ''<<<*>>>'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(68, '<<*>>', TRUE, FALSE),
(68, '<<<*>>>', TRUE, TRUE),
(68, '>>>*<<<', TRUE, FALSE),
(68, '<<<#>>>', TRUE, FALSE);

-- Pregunta 19
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Blanco'' es igual a ''Luz'', ¿qué es ''Blanco''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(69, 'Blanco', TRUE, FALSE),
(69, 'Oscuro', TRUE, FALSE),
(69, 'Luz', TRUE, TRUE),
(69, 'Negro', TRUE, FALSE);

-- Pregunta 20
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''H'' = ''I'', entonces ''H'' es:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(70, 'H', TRUE, FALSE),
(70, 'J', TRUE, FALSE),
(70, 'G', TRUE, FALSE),
(70, 'I', TRUE, TRUE);

-- Pregunta 21
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Selecciona el equivalente exacto de ''[--O--]'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(71, '[--O--]', TRUE, TRUE),
(71, '[-O--]', TRUE, FALSE),
(71, '[--0--]', TRUE, FALSE),
(71, '[--O-]', TRUE, FALSE);

-- Pregunta 22
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Sur'' es ''S2'', ¿''Sur'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(72, 'S1', TRUE, FALSE),
(72, 'S2', TRUE, TRUE),
(72, 'N2', TRUE, FALSE),
(72, 'S3', TRUE, FALSE);

-- Pregunta 23
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''J-5'' es ''Y'', ¿qué es ''J-5''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(73, 'J-5', TRUE, FALSE),
(73, 'X', TRUE, FALSE),
(73, 'Y', TRUE, TRUE),
(73, 'Z', TRUE, FALSE);

-- Pregunta 24
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, '¿Cuál es el par idéntico de ''Q-W-E-R''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(74, 'Q-W-R-E', TRUE, FALSE),
(74, 'Q-E-W-R', TRUE, FALSE),
(74, 'W-Q-E-R', TRUE, FALSE),
(74, 'Q-W-E-R', TRUE, TRUE);

-- Pregunta 25
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Sol'' se escribe ''1-1'', ¿cómo se escribe ''Sol''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(75, '1-1', TRUE, TRUE),
(75, '1-0', TRUE, FALSE),
(75, '0-1', TRUE, FALSE),
(75, '1-1-1', TRUE, FALSE);

-- Pregunta 26
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Pan'' es igual a ''Trigo'', ¿qué es ''Pan''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(76, 'Pan', TRUE, FALSE),
(76, 'Trigo', TRUE, TRUE),
(76, 'Arroz', TRUE, FALSE),
(76, 'Maíz', TRUE, FALSE);

-- Pregunta 27
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Identifica el gemelo de ''>>>V<<<'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(77, '>>V<<', TRUE, FALSE),
(77, '>>>U<<<', TRUE, FALSE),
(77, '>>>V<<<', TRUE, TRUE),
(77, '<<<V>>>', TRUE, FALSE);

-- Pregunta 28
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Negro'' equivale a ''Noche'', ¿qué es ''Negro''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(78, 'Negro', TRUE, FALSE),
(78, 'Día', TRUE, FALSE),
(78, 'Gris', TRUE, FALSE),
(78, 'Noche', TRUE, TRUE);

-- Pregunta 29
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''X'' = ''Y'', entonces ''X'' es:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(79, 'Y', TRUE, TRUE),
(79, 'X', TRUE, FALSE),
(79, 'Z', TRUE, FALSE),
(79, 'W', TRUE, FALSE);

-- Pregunta 30
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Selecciona el equivalente a ''***#***'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(80, '**##***', TRUE, FALSE),
(80, '***#***', TRUE, TRUE),
(80, '***#**', TRUE, FALSE),
(80, '****#***', TRUE, FALSE);

-- Pregunta 31
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Este'' es ''E3'', ¿''Este'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(81, 'E1', TRUE, FALSE),
(81, 'O3', TRUE, FALSE),
(81, 'E3', TRUE, TRUE),
(81, 'E2', TRUE, FALSE);

-- Pregunta 32
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''L-2'' es ''Z'', ¿qué es ''L-2''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(82, 'L-2', TRUE, FALSE),
(82, 'Y', TRUE, FALSE),
(82, 'A', TRUE, FALSE),
(82, 'Z', TRUE, TRUE);

-- Pregunta 33
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, '¿Cuál es el par de ''M-N-O''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(83, 'M-N-O', TRUE, TRUE),
(83, 'M-O-N', TRUE, FALSE),
(83, 'N-M-O', TRUE, FALSE),
(83, 'M-N-P', TRUE, FALSE);

-- Pregunta 34
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Agua'' es ''H2O'', ''H2O'' es:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(84, 'H2O', TRUE, FALSE),
(84, 'Agua', TRUE, TRUE),
(84, 'Gas', TRUE, FALSE),
(84, 'Hielo', TRUE, FALSE);

-- Pregunta 35
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Empareja el código ''A-00'' con su igual:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(85, 'A-01', TRUE, FALSE),
(85, '00-A', TRUE, FALSE),
(85, 'A-00', TRUE, TRUE),
(85, 'B-00', TRUE, FALSE);

-- Pregunta 36
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Hola'' es igual a ''Chao'', ¿qué es ''Hola''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(86, 'Hola', TRUE, FALSE),
(86, 'Adiós', TRUE, FALSE),
(86, 'Onda', TRUE, FALSE),
(86, 'Chao', TRUE, TRUE);

-- Pregunta 37
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Encuentra la réplica exacta de ''[$$$$]'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(87, '[$$$$]', TRUE, TRUE),
(87, '[$$$]', TRUE, FALSE),
(87, '[$$$$$]', TRUE, FALSE),
(87, '[$ $ $ $]', TRUE, FALSE);

-- Pregunta 38
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''777'' es ''Suerte'', ¿qué es ''777''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(88, '777', TRUE, FALSE),
(88, 'Suerte', TRUE, TRUE),
(88, 'Mala', TRUE, FALSE),
(88, 'Fortuna', TRUE, FALSE);

-- Pregunta 39
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Identifica el gemelo de ''<<<A>>>'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(89, '<<A>>', TRUE, FALSE),
(89, '<<<B>>>', TRUE, FALSE),
(89, '<<<A>>>', TRUE, TRUE),
(89, '>>>A<<<', TRUE, FALSE);

-- Pregunta 40
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Abajo'' es ''D-1'', ¿''Abajo'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(90, 'U-1', TRUE, FALSE),
(90, 'D-2', TRUE, FALSE),
(90, 'D-0', TRUE, FALSE),
(90, 'D-1', TRUE, TRUE);

-- Pregunta 41
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''M'' es idéntico a ''M'', ¿cuál es el par de ''M''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(91, 'M', TRUE, TRUE),
(91, 'W', TRUE, FALSE),
(91, 'N', TRUE, FALSE),
(91, 'm', TRUE, FALSE);

-- Pregunta 42
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''9999'' es ''Fin'', ¿qué es ''9999''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(92, '9999', TRUE, FALSE),
(92, 'Fin', TRUE, TRUE),
(92, 'Inicio', TRUE, FALSE),
(92, 'Medio', TRUE, FALSE);

-- Pregunta 43
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Selecciona el equivalente a ''///O///'':', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(93, '//O///', TRUE, FALSE),
(93, '///0///', TRUE, FALSE),
(93, '///O///', TRUE, TRUE),
(93, '///O//', TRUE, FALSE);

-- Pregunta 44
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Rojo'' es igual a ''Fuego'', ¿qué es ''Rojo''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(94, 'Rojo', TRUE, FALSE),
(94, 'Agua', TRUE, FALSE),
(94, 'Aire', TRUE, FALSE),
(94, 'Fuego', TRUE, TRUE);

-- Pregunta 45
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''P'' = ''Q'', entonces ''P'' es:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(95, 'Q', TRUE, TRUE),
(95, 'P', TRUE, FALSE),
(95, 'R', TRUE, FALSE),
(95, 'O', TRUE, FALSE);

-- Pregunta 46
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Relaciona el código ''X-10'' con su igual:', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(96, 'X-01', TRUE, FALSE),
(96, 'X-10', TRUE, TRUE),
(96, '10-X', TRUE, FALSE),
(96, 'Y-10', TRUE, FALSE);

-- Pregunta 47
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Oeste'' es ''O4'', ¿''Oeste'' es?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(97, 'O1', TRUE, FALSE),
(97, 'E4', TRUE, FALSE),
(97, 'O4', TRUE, TRUE),
(97, 'O3', TRUE, FALSE);

-- Pregunta 48
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''K-1'' es ''W'', ¿qué es ''K-1''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(98, 'K-1', TRUE, FALSE),
(98, 'V', TRUE, FALSE),
(98, 'X', TRUE, FALSE),
(98, 'W', TRUE, TRUE);

-- Pregunta 49
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, '¿Cuál es el par de ''U-V-W''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(99, 'U-V-W', TRUE, TRUE),
(99, 'U-W-V', TRUE, FALSE),
(99, 'V-U-W', TRUE, FALSE),
(99, 'U-V-X', TRUE, FALSE);

-- Pregunta 50
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Luna'' es igual a ''Plata'', ¿qué es ''Luna''?', TRUE, '1');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
(100, 'Luna', TRUE, FALSE),
(100, 'Plata', TRUE, TRUE),
(100, 'Oro', TRUE, FALSE),
(100, 'Cobre', TRUE, FALSE);

-- Pregunta 1 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Luna'' = ''Noche'' y ''Noche'' = ''Oscuro'', ¿''Luna'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (101, 'Oscuro', TRUE, TRUE),
    (101, 'Luna', TRUE, FALSE),
    (101, 'Noche', TRUE, FALSE),
    (101, 'Claro', TRUE, FALSE);

-- Pregunta 2 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Fuego'' = ''Calor'' y ''Calor'' = ''Rojo'', ¿''Fuego'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (102, 'Fuego', TRUE, FALSE),
    (102, 'Rojo', TRUE, TRUE),
    (102, 'Calor', TRUE, FALSE),
    (102, 'Azul', TRUE, FALSE);

-- Pregunta 3 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''10'' = ''X'' y ''X'' = ''20'', ¿''10'' es igual a?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (103, '10', TRUE, FALSE),
    (103, 'X', TRUE, FALSE),
    (103, '20', TRUE, TRUE),
    (103, '30', TRUE, FALSE);

-- Pregunta 4 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''C'' = ''D'' y ''E'' = ''D'', entonces ''C'' y ''E'' son:', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (104, 'Diferentes', TRUE, FALSE),
    (104, 'Opuestos', TRUE, FALSE),
    (104, 'Inversos', TRUE, FALSE),
    (104, 'Iguales', TRUE, TRUE);

-- Pregunta 5 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Norte'' = ''Arriba'' y ''Arriba'' = ''N'', ¿''Norte'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (105, 'N', TRUE, TRUE),
    (105, 'Norte', TRUE, FALSE),
    (105, 'Arriba', TRUE, FALSE),
    (105, 'Sur', TRUE, FALSE);

-- Pregunta 6 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Pez'' = ''Agua'' y ''Agua'' = ''Mar'', ¿''Pez'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (106, 'Pez', TRUE, FALSE),
    (106, 'Mar', TRUE, TRUE),
    (106, 'Agua', TRUE, FALSE),
    (106, 'Río', TRUE, FALSE);

-- Pregunta 7 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''K'' = ''L'' y ''L'' = ''M'', ¿''K'' es ''M''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (107, 'No', TRUE, FALSE),
    (107, 'Tal vez', TRUE, FALSE),
    (107, 'Sí', TRUE, TRUE),
    (107, 'Nunca', TRUE, FALSE);

-- Pregunta 8 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Verde'' = ''Go'' y ''Go'' = ''Avanzar'', ¿''Verde'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (108, 'Verde', TRUE, FALSE),
    (108, 'Go', TRUE, FALSE),
    (108, 'Parar', TRUE, FALSE),
    (108, 'Avanzar', TRUE, TRUE);

-- Pregunta 9 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''5'' = ''A'' y ''A'' = ''B'', ¿''5'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (109, 'B', TRUE, TRUE),
    (109, '5', TRUE, FALSE),
    (109, 'A', TRUE, FALSE),
    (109, 'C', TRUE, FALSE);

-- Pregunta 10 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Sol'' = ''Día'' y ''Día'' = ''Brillante'', ¿''Sol'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (110, 'Sol', TRUE, FALSE),
    (110, 'Brillante', TRUE, TRUE),
    (110, 'Día', TRUE, FALSE),
    (110, 'Oscuro', TRUE, FALSE);

-- Pregunta 11 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''T'' = ''U'' y ''U'' = ''V'', ¿''T'' es igual a ''V''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (111, 'No', TRUE, FALSE),
    (111, 'Solo U', TRUE, FALSE),
    (111, 'Sí', TRUE, TRUE),
    (111, 'A veces', TRUE, FALSE);

-- Pregunta 12 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Blanco'' = ''0'' y ''0'' = ''W'', ¿''Blanco'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (112, 'Blanco', TRUE, FALSE),
    (112, '0', TRUE, FALSE),
    (112, 'B', TRUE, FALSE),
    (112, 'W', TRUE, TRUE);

-- Pregunta 13 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Árbol'' = ''Planta'' y ''Planta'' = ''Verde'', ¿''Árbol'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (113, 'Verde', TRUE, TRUE),
    (113, 'Árbol', TRUE, FALSE),
    (113, 'Planta', TRUE, FALSE),
    (113, 'Tierra', TRUE, FALSE);

-- Pregunta 14 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''X'' = ''9'' y ''Y'' = ''9'', entonces ''X'' y ''Y'' son:', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (114, 'Diferentes', TRUE, FALSE),
    (114, 'Iguales', TRUE, TRUE),
    (114, 'Inversos', TRUE, FALSE),
    (114, 'Negativos', TRUE, FALSE);

-- Pregunta 15 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Oro'' = ''Au'' y ''Au'' = ''Metal'', ¿''Oro'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (115, 'Oro', TRUE, FALSE),
    (115, 'Au', TRUE, FALSE),
    (115, 'Metal', TRUE, TRUE),
    (115, 'Brillo', TRUE, FALSE);

-- Pregunta 16 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''R'' = ''1'' y ''1'' = ''S'', ¿''R'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (116, 'R', TRUE, FALSE),
    (116, '1', TRUE, FALSE),
    (116, 'T', TRUE, FALSE),
    (116, 'S', TRUE, TRUE);

-- Pregunta 17 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Gato'' = ''Miau'' y ''Miau'' = ''Sonido'', ¿''Gato'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (117, 'Sonido', TRUE, TRUE),
    (117, 'Gato', TRUE, FALSE),
    (117, 'Miau', TRUE, FALSE),
    (117, 'Perro', TRUE, FALSE);

-- Pregunta 18 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''A'' = ''B'', ''B'' = ''C'' y ''C'' = ''5'', ¿''A'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (118, 'B', TRUE, FALSE),
    (118, '5', TRUE, TRUE),
    (118, 'C', TRUE, FALSE),
    (118, 'A', TRUE, FALSE);

-- Pregunta 19 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Sur'' = ''Abajo'' y ''Abajo'' = ''S'', ¿''Sur'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (119, 'Sur', TRUE, FALSE),
    (119, 'Abajo', TRUE, FALSE),
    (119, 'S', TRUE, TRUE),
    (119, 'Norte', TRUE, FALSE);

-- Pregunta 20 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''H2O'' = ''Agua'' y ''Agua'' = ''Líquido'', ¿''H2O'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (120, 'H2O', TRUE, FALSE),
    (120, 'Agua', TRUE, FALSE),
    (120, 'Sólido', TRUE, FALSE),
    (120, 'Líquido', TRUE, TRUE);

-- Pregunta 21 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''M'' = ''N'' y ''N'' = ''M'', ¿''M'' es ''N''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (121, 'Sí', TRUE, TRUE),
    (121, 'No', TRUE, FALSE),
    (121, 'A veces', TRUE, FALSE),
    (121, 'Depende', TRUE, FALSE);

-- Pregunta 22 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''8'' = ''H'' y ''H'' = ''I'', ¿''8'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (122, '8', TRUE, FALSE),
    (122, 'I', TRUE, TRUE),
    (122, 'H', TRUE, FALSE),
    (122, 'G', TRUE, FALSE);

-- Pregunta 23 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Cielo'' = ''Azul'' y ''Azul'' = ''Color'', ¿''Cielo'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (123, 'Cielo', TRUE, FALSE),
    (123, 'Azul', TRUE, FALSE),
    (123, 'Color', TRUE, TRUE),
    (123, 'Nube', TRUE, FALSE);

-- Pregunta 24 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''P'' = ''50'' y ''Q'' = ''50'', entonces ''P'' y ''Q'' son:', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (124, 'Diferentes', TRUE, FALSE),
    (124, 'Opuestos', TRUE, FALSE),
    (124, 'Variables', TRUE, FALSE),
    (124, 'Iguales', TRUE, TRUE);

-- Pregunta 25 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Reloj'' = ''Tiempo'' y ''Tiempo'' = ''Segundos'', ¿''Reloj'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (125, 'Segundos', TRUE, TRUE),
    (125, 'Reloj', TRUE, FALSE),
    (125, 'Tiempo', TRUE, FALSE),
    (125, 'Hora', TRUE, FALSE);

-- Pregunta 26 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''J'' = ''K'' y ''K'' = ''L'', ¿''J'' es ''L''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (126, 'No', TRUE, FALSE),
    (126, 'Sí', TRUE, TRUE),
    (126, 'Tal vez', TRUE, FALSE),
    (126, 'Solo K', TRUE, FALSE);

-- Pregunta 27 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''100'' = ''C'' y ''C'' = ''Centena'', ¿''100'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (127, '100', TRUE, FALSE),
    (127, 'C', TRUE, FALSE),
    (127, 'Centena', TRUE, TRUE),
    (127, 'Decena', TRUE, FALSE);

-- Pregunta 28 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Izquierda'' = ''L'' y ''L'' = ''Flecha'', ¿''Izquierda'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (128, 'Izquierda', TRUE, FALSE),
    (128, 'L', TRUE, FALSE),
    (128, 'Derecha', TRUE, FALSE),
    (128, 'Flecha', TRUE, TRUE);

-- Pregunta 29 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''D'' = ''E'', ''E'' = ''F'' y ''F'' = ''G'', ¿''D'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (129, 'G', TRUE, TRUE),
    (129, 'E', TRUE, FALSE),
    (129, 'F', TRUE, FALSE),
    (129, 'H', TRUE, FALSE);

-- Pregunta 30 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Ratón'' = ''Queso'' y ''Queso'' = ''Comida'', ¿''Ratón'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (130, 'Ratón', TRUE, FALSE),
    (130, 'Comida', TRUE, TRUE),
    (130, 'Queso', TRUE, FALSE),
    (130, 'Animal', TRUE, FALSE);

-- Pregunta 31 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''X'' = ''Y'' y ''Y'' = ''X'', ¿''X'' es igual a ''Y''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (131, 'No', TRUE, FALSE),
    (131, 'Nunca', TRUE, FALSE),
    (131, 'Sí', TRUE, TRUE),
    (131, 'Incierto', TRUE, FALSE);

-- Pregunta 32 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''7'' = ''Z'' y ''Z'' = ''77'', ¿''7'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (132, '7', TRUE, FALSE),
    (132, 'Z', TRUE, FALSE),
    (132, '70', TRUE, FALSE),
    (132, '77', TRUE, TRUE);

-- Pregunta 33 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Hielo'' = ''Frío'' y ''Frío'' = ''Blanco'', ¿''Hielo'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (133, 'Blanco', TRUE, TRUE),
    (133, 'Hielo', TRUE, FALSE),
    (133, 'Frío', TRUE, FALSE),
    (133, 'Agua', TRUE, FALSE);

-- Pregunta 34 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Alfa'' = ''1'' y ''Beta'' = ''1'', entonces ''Alfa'' y ''Beta'' son:', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (134, 'Diferentes', TRUE, FALSE),
    (134, 'Iguales', TRUE, TRUE),
    (134, 'Letras', TRUE, FALSE),
    (134, 'Números', TRUE, FALSE);

-- Pregunta 35 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Luz'' = ''Sol'' y ''Sol'' = ''Estrella'', ¿''Luz'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (135, 'Luz', TRUE, FALSE),
    (135, 'Sol', TRUE, FALSE),
    (135, 'Estrella', TRUE, TRUE),
    (135, 'Luna', TRUE, FALSE);

-- Pregunta 36 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''S'' = ''T'' y ''T'' = ''U'', ¿''S'' es ''U''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (136, 'No', TRUE, FALSE),
    (136, 'Solo T', TRUE, FALSE),
    (136, 'Ninguna', TRUE, FALSE),
    (136, 'Sí', TRUE, TRUE);

-- Pregunta 37 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''12'' = ''M'' y ''M'' = ''Meses'', ¿''12'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (137, 'Meses', TRUE, TRUE),
    (137, '12', TRUE, FALSE),
    (137, 'M', TRUE, FALSE),
    (137, 'Año', TRUE, FALSE);

-- Pregunta 38 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Derecha'' = ''R'' y ''R'' = ''Giro'', ¿''Derecha'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (138, 'Derecha', TRUE, FALSE),
    (138, 'Giro', TRUE, TRUE),
    (138, 'R', TRUE, FALSE),
    (138, 'Freno', TRUE, FALSE);

-- Pregunta 39 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''W'' = ''X'', ''X'' = ''Y'' y ''Y'' = ''Z'', ¿''W'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (139, 'X', TRUE, FALSE),
    (139, 'Y', TRUE, FALSE),
    (139, 'W', TRUE, FALSE),
    (139, 'Z', TRUE, TRUE);

-- Pregunta 40 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Perro'' = ''Ladra'' y ''Ladra'' = ''Acción'', ¿''Perro'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (140, 'Perro', TRUE, FALSE),
    (140, 'Ladra', TRUE, FALSE),
    (140, 'Gato', TRUE, FALSE),
    (140, 'Acción', TRUE, TRUE);

-- Pregunta 41 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''A'' = ''10'' y ''B'' = ''10'', entonces ''A'' y ''B'' son:', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (141, 'Iguales', TRUE, TRUE),
    (141, 'Diferentes', TRUE, FALSE),
    (141, 'Primos', TRUE, FALSE),
    (141, 'Inversos', TRUE, FALSE);

-- Pregunta 42 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''0'' = ''Inicio'' y ''Inicio'' = ''Play'', ¿''0'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (142, '0', TRUE, FALSE),
    (142, 'Play', TRUE, TRUE),
    (142, 'Inicio', TRUE, FALSE),
    (142, 'Stop', TRUE, FALSE);

-- Pregunta 43 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Noche'' = ''Luna'' y ''Luna'' = ''Satélite'', ¿''Noche'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (143, 'Noche', TRUE, FALSE),
    (143, 'Luna', TRUE, FALSE),
    (143, 'Satélite', TRUE, TRUE),
    (143, 'Planeta', TRUE, FALSE);

-- Pregunta 44 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''O'' = ''P'' y ''P'' = ''Q'', ¿''O'' es ''Q''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (144, 'No', TRUE, FALSE),
    (144, 'Tal vez', TRUE, FALSE),
    (144, 'A veces', TRUE, FALSE),
    (144, 'Sí', TRUE, TRUE);

-- Pregunta 45 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''50'' = ''L'' y ''L'' = ''Número'', ¿''50'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (145, 'Número', TRUE, TRUE),
    (145, '50', TRUE, FALSE),
    (145, 'L', TRUE, FALSE),
    (145, 'Letra', TRUE, FALSE);

-- Pregunta 46 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Papel'' = ''Hoja'' y ''Hoja'' = ''Blanca'', ¿''Papel'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (146, 'Papel', TRUE, FALSE),
    (146, 'Blanca', TRUE, TRUE),
    (146, 'Hoja', TRUE, FALSE),
    (146, 'Cuaderno', TRUE, FALSE);

-- Pregunta 47 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''U'' = ''V'', ''V'' = ''W'' y ''W'' = ''100'', ¿''U'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (147, 'V', TRUE, FALSE),
    (147, 'W', TRUE, FALSE),
    (147, '100', TRUE, TRUE),
    (147, 'U', TRUE, FALSE);

-- Pregunta 48 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Rojo'' = ''Stop'' y ''Stop'' = ''Alto'', ¿''Rojo'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (148, 'Rojo', TRUE, FALSE),
    (148, 'Stop', TRUE, FALSE),
    (148, 'Siga', TRUE, FALSE),
    (148, 'Alto', TRUE, TRUE);

-- Pregunta 49 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''F'' = ''G'' y ''G'' = ''F'', ¿''F'' es igual a ''G''?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (149, 'Sí', TRUE, TRUE),
    (149, 'No', TRUE, FALSE),
    (149, 'Falso', TRUE, FALSE),
    (149, 'Nunca', TRUE, FALSE);

-- Pregunta 50 (Dificultad Media)
INSERT INTO item (id_actividad, pregunta, estatus_activo, dificultad) VALUES (1, 'Si ''Mil'' = ''1000'' y ''1000'' = ''K'', ¿''Mil'' es?', TRUE, '2');
INSERT INTO respuesta (id_item, text_respuesta, activo, correcta) VALUES
    (150, 'Mil', TRUE, FALSE),
    (150, 'K', TRUE, TRUE),
    (150, '1000', TRUE, FALSE),
    (150, 'M', TRUE, FALSE);