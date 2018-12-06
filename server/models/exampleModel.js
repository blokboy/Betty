const knex = require('knex');

const knexConfig = require('../config/knexfile');
const db = knex(knexConfig.development);

module.exports = {
	getExamples
};

function getExamples() {
	return db('exampleTable');
}
