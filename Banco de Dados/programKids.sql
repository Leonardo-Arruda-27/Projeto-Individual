create database programKids;

use programKids;

create table Leitura(
id int primary key auto_increment,
temperatura float,
umidade float,
momento datetime,
fkcaminhao int
);
 create table usuario(
 id int primary key auto_increment,
 nome varchar(50),
 login varchar(50),
 senha varchar(50)
 );
 
 create table cadastro(
 id int primary key auto_increment,
 nome_c varchar(50),
 dataNascimento date,
 nomeResponsavel varchar(50),
 estado char(2),
 login_c varchar(50),
 senha varchar(50)
 );
 
 select * from cadastro;
 
 create table publicacao(
 id int primary key auto_increment,
 descricao varchar(200),
fkUsuario int,
foreign key (fkUsuario) references cadastro (id)
);