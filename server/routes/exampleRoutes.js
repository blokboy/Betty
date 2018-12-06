const express = require('express');

const exampleModel = require('../models/exampleModel');

const router = express.Router();

// example get
router.get('/', (req, res) => {
	exampleModel
		.getExamples()
		.then(examples => {
			res.status(200).json(examples);
		})
		.catch(err => res.status(500).json(err));
});

module.exports = router;
