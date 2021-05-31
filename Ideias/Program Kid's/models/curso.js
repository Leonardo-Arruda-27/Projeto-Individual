'use strict';

const usuario = require("./usuario");

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
    let Curso = sequelize.define('Curso',{
		idcurso: {
			field: 'idcurso',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},													
		fkcadastro: {
			field: 'fkcadastro',
			type: DataTypes.INTEGER,
			allowNull: false,
            references:{
                model: usuario,
                key: 'id'
            }
		},
        nomeCurso: {
			field: 'nomeCurso',
			type: DataTypes.STRING,
			allowNull: false
		}
	
	}, 
	{
		tableName: 'curso', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Curso;
};
