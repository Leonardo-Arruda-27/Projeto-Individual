	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

// nome : req.body.nome,
// dataNascimento: req.body.dataNascimento,
// nomeResponsavel: req.body.nomeResponsavel,
// estado: req.body.estado,
// email_html : req.body.email_html,
// senha: req.body.senha,

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},													
		nome: {
			field: 'nome_c',
			type: DataTypes.STRING,
			allowNull: false
		},
		dataNascimento: {
			field: 'dataNascimento',
			type: DataTypes.DATE,
			allowNull: false
		},
		nomeResponsavel: {
			field: 'nomeResponsavel',
			type: DataTypes.STRING,
			allowNull: false
		},
		estado: {
			field: 'estado',
			type: DataTypes.STRING,
			allowNull: false
		},
		email_html: {
			field: 'login_c',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'cadastro', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
