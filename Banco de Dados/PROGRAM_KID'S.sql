create database programKids;

use programKids;


 create table acesso(
 id int primary key auto_increment,
 login varchar(50),
 senha varchar(50)
 );

create table curso(
idcurso int primary key auto_increment,
nomeCurso varchar(30),
cargaHoraria float
);

create table acesso_curso (
idacesso int,
idcurso int,
primary key (idacesso, idcurso),
foreign key (idacesso) references acesso (id),
foreign key (idcurso) references curso (idcurso)
);

 create table cadastro(
 id int primary key auto_increment,
 nome_c varchar(50),
 dataNascimento date,
 nomeResponsavel varchar(50),
 estado char(2),
 login_c varchar(50),
 senha varchar(50),
 fkacesso int,
 foreign key (fkacesso) references acesso (id)
 );