const db = require('knex')(require('../knexfile').development)
const authy = require('authy')(require('../config').authyKey)

module.exports = {
    get: id => {
	if(!id) return db('todos')
	return db('todos').where({id: Number(id)})
    },
    add: todo => {
	if(todo.title && todo.content) {
            return db('todos')
		.insert(todo)
		.then(ids => ({ id: ids[0], ...todo}))
		.catch(error => {throw new Error(error)})
	} else {
	    throw new Error('todo needs title and content fields')
	}
    },
    update: (id, todo) => {
	if(id && todo) {
            return db('todos')
		.where({ id: Number(id) })
		.update(todo)
		.then(updatedTodo => ({...updatedTodo}))
		.catch(error => {throw new Error(error)})
		     } else {
			 throw new Error('need an id and todo with title and content fields')
		     }
	},
	remove: id => {
	    if(id) {
		return db('todos')
		    .where({ id: Number(id) })
		    .del()
		    .then(n => n)
	    } else {
		throw new Error('need an id!')
	    }
	}
}
