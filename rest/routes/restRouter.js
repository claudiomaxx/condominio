var express = require('express');
var router  = express.Router();
var mainController = require('../controllers/mainController');


router.get('/:controller/:campo/:valor',function(req,res){
	
	mainController.list(req.params,function(response){
		res.json(response);
	});
});

router.get('/:controller',function(req,res){
	
	mainController.list(req.params,function(response){
		res.json(response);
	});
});

router.post('/cadastra',function(req,res){
	var params = {};
	params.nome 		= req.body.nome;
	params.descricao = req.body.descricao;
	params.valor 	= req.body.valor;

	var Produto = require('../models/Produto');
	var item = new Produto(params);

	mainController.save(item,function(response){
		res.json(response);
	});
});

router.delete('/remove/:id',function(req,res){
	
	var id = req.params.id;

	mainController.delete("Produto", id, function(response){
		res.json(response);
	})
});

module.exports = router;