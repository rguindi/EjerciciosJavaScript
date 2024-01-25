CREATE database IF NOT exists ejemplodb;
use ejemplodb;
create table if not exists ciudades
(
    id int(11) not null auto_increment,
    nombre varchar(50),
    cantidad int,
    primary key (id)
);
insert into ciudades (nombre,cantidad) values ("Salamanca",210000);
insert into ciudades (nombre,cantidad) values ("Sevilla",580000);
insert into ciudades (nombre,cantidad) values ("Murcia",198000);
insert into ciudades (nombre,cantidad) values ("Badajoz",160000);


