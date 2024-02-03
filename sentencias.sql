SELECT nombre_ciudad, poblacion
FROM ciudades
WHERE poblacion BETWEEN 1000000 AND 5000000;



SELECT c.nombre_ciudad, c.poblacion
FROM ciudades c
JOIN paises p ON c.id_pais = p.id_pais
WHERE p.nombre_pais = 'España' AND c.poblacion BETWEEN 1000000 AND 5000000;

SELECT nombre_ciudad, poblacion
FROM ciudades
ORDER BY poblacion DESC
LIMIT 1;


-- //Empiecen por P
SELECT c.nombre_ciudad, p.nombre_pais
FROM ciudades c
JOIN paises p ON c.id_pais = p.id_pais
WHERE p.nombre_pais = 'España' AND c.nombre_ciudad LIKE 'P%';


-- numero de ciudades de españa
SELECT COUNT(*) AS numero_de_ciudades
FROM ciudades c
JOIN paises p ON c.id_pais = p.id_pais
WHERE p.nombre_pais = 'España';

SELECT p.* FROM productos p join categorias c on p.categoria = c.id WHERE c.nombre = 'Ordenadores';   --Trucar resultados a una tabla



    --CREAR TABLAS
-- Crear tabla 'usuarios'
CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

-- Crear tabla 'pedidos'
CREATE TABLE pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    fecha_pedido DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- Crear tabla 'productos'
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(100),
    precio DECIMAL(10,2)
);

-- Crear tabla 'detalles_pedido' con clave foránea compuesta
CREATE TABLE detalles_pedido (
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);




--SI HAY PROBLEMAS EN EL ORDEN DE CREAR LAS TABLAS POR LAS CLAVES FORANEAS
ALTER TABLE pedidos
ADD CONSTRAINT fk_id_usuario
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario);