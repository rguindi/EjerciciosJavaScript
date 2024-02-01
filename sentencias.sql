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