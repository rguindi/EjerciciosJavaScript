create database tienda;
-- Crear tabla de empleados
CREATE TABLE empleado (
    id_emp INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    salario DECIMAL(10, 2),
    fecha_contrato DATE
);

-- Crear tabla de clientes
CREATE TABLE cliente (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50),
    direccion VARCHAR(100),
    telefono VARCHAR(20)
);

-- Crear tabla de productos
CREATE TABLE producto (
    id_producto INT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL(10, 2)
);

-- Crear tabla de proveedores
CREATE TABLE proveedor (
    id_proveedor INT PRIMARY KEY,
    nombre_empresa VARCHAR(100),
    contacto VARCHAR(50),
    telefono_contacto VARCHAR(20)
);

-- Crear tabla de compras
CREATE TABLE compra (
    id_compra INT PRIMARY KEY,
    id_cliente INT,
    id_producto INT,
    id_proveedor INT,
    cantidad INT,
    fecha_compra DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto),
    FOREIGN KEY (id_proveedor) REFERENCES proveedor(id_proveedor)
);

-- Inserciones en la tabla de empleados
INSERT INTO empleado (id_emp, nombre, apellido, salario, fecha_contrato) VALUES
(1, 'Juan', 'Gomez', 50000.00, '2022-01-01'),
(2, 'Maria', 'Lopez', 60000.00, '2022-02-15'),
(3, 'Carlos', 'Martinez', 55000.00, '2022-03-10'),
(4, 'Ana', 'Rodriguez', 48000.00, '2022-04-20'),
(5, 'Pedro', 'Fernandez', 52000.00, '2022-05-05');

-- Inserciones en la tabla de clientes
INSERT INTO cliente (id_cliente, nombre, direccion, telefono) VALUES
(1, 'Cliente1', 'Calle 123', '555-1234'),
(2, 'Cliente2', 'Avenida 456', '555-5678'),
(3, 'Cliente3', 'Plaza Principal', '555-7890'),
(4, 'Cliente4', 'Callejón Secreto', '555-4321'),
(5, 'Cliente5', 'Avenida Principal', '555-9876');

-- Inserciones en la tabla de productos
INSERT INTO producto (id_producto, nombre, descripcion, precio) VALUES
(1, 'Producto1', 'Descripción del Producto 1', 29.99),
(2, 'Producto2', 'Descripción del Producto 2', 49.99),
(3, 'Producto3', 'Descripción del Producto 3', 19.99),
(4, 'Producto4', 'Descripción del Producto 4', 39.99),
(5, 'Producto5', 'Descripción del Producto 5', 9.99);

-- Inserciones en la tabla de proveedores
INSERT INTO proveedor (id_proveedor, nombre_empresa, contacto, telefono_contacto) VALUES
(1, 'Proveedor1', 'Contacto1', '555-1111'),
(2, 'Proveedor2', 'Contacto2', '555-2222'),
(3, 'Proveedor3', 'Contacto3', '555-3333'),
(4, 'Proveedor4', 'Contacto4', '555-4444'),
(5, 'Proveedor5', 'Contacto5', '555-5555');

-- Inserciones en la tabla de compras
INSERT INTO compra (id_compra, id_cliente, id_producto, id_proveedor, cantidad, fecha_compra, total) VALUES
(1, 1, 1, 1, 5, '2022-04-01', 149.95),
(2, 2, 2, 2, 3, '2022-04-02', 149.97),
(3, 3, 3, 3, 2, '2022-04-03', 39.98),
(4, 4, 4, 4, 1, '2022-04-04', 39.99),
(5, 5, 5, 5, 4, '2022-04-05', 39.96);