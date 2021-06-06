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

create table curso(
idcurso int primary key auto_increment,
fkcadastro int,
foreign key (fkcadastro) references cadastro(id),
nomeCurso varchar(20),
check( nomeCurso = 'html e css' or nomeCurso = 'java' or nomeCurso = 'tecnologia da informação'));