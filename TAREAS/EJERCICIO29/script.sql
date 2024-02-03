CREATE database IF NOT exists tarea29;
use tarea29;



create table if not exists clientes
(
    id int(11) NOT NULL, 
    nombre varchar(50),
    primary key (id)
);

create table if not exists categorias
(
    id int(11) NOT NULL, 
    nombre varchar(50),
    primary key (id)
);


create table if not exists productos
(
    id int(11) not null auto_increment,
    nombre varchar(50),
    categoria int(11),
    precio int,
    stock int,
    primary key (id),
    FOREIGN KEY (categoria) REFERENCES categorias(id)
);



insert into clientes (id,nombre) values (1,"Raul");
insert into clientes (id,nombre) values (2,"Manuel");
insert into clientes (id,nombre) values (3,"Clara");
insert into clientes (id,nombre) values (4,"Elena");
insert into clientes (id,nombre) values (5,"Pedro");

insert into categorias (id,nombre) values (1,"Ordenadores");
insert into categorias (id,nombre) values (2,"Teléfonos");
insert into categorias (id,nombre) values (3,"Tablets");
insert into categorias (id,nombre) values (4,"Altavoces");
insert into categorias (id,nombre) values (5,"Teclados");


insert into productos (nombre, categoria, precio, stock) values ("Imac", 1, 1000, 7);
insert into productos (nombre, categoria, precio, stock) values ("Iphone", 2, 345, 86);
insert into productos (nombre, categoria, precio, stock) values ("Ipad", 3, 544, 43);
insert into productos (nombre, categoria, precio, stock) values ("Alexa", 4, 43, 12);
insert into productos (nombre, categoria, precio, stock) values ("Magic pad", 5, 54, 56);


