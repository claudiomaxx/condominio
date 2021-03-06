var express = require('express');
var router  = express.Router();
var mainController = require('../controllers/mainController');

/**
 * Rotas para o documento principal
 */
router.get('/condominio/:campo/:valor',function(req,res){
		mainController.listCondominio(req.params,function(response){
		res.json(response);
	});
});

// recupear o condominio de baseado em um filtro de entidade
router.get('/condominio/porEntidade/:entidade/:campo/:valor',function(req,res){
	mainController.listarCondominioPorEntidade(req.params,function(response){
		res.json(response);
	});
});

router.post('/:controller/cadastra',function(req,res){

	var Model = require('../models/'+req.params.controller);
	var item = new Model(req.body);

	mainController.save(item,function(response){
		res.json(response);
	});
});


/**
 * Rotas para os ELEMENTOS do documento principal
 */
router.get('/:entidade',function(req,res){
	var entidade = req.params.entidade;
	mainController.listEntidade(entidade,null,function(response){
		res.json(response);
	});
});

router.get('/condominio/:condominio/entidade/:entidade/:campo/:valor',function(req,res){
	mainController.listarEntidade(req.params,function(response){
		res.json(response);
	});
});

// route.get('/identifica/usuario/:telefone/:uid',function(){
	
// 	req.params.entidade = "titulares";

// 	req.params.filtro = {
// 		"telefone":req.params.telefone,
// 		"uid":req.params.uid 
// 	}

// 	mainController.listarEntidade(req.params,function(response){
// 		res.json(response);
// 	});
// });


// http://192.168.1.4:3000/rest/condominio/5813f94f31b3412890527aae/altera/titulares
router.put('/condominio/:condominio/altera/:entidade',function(req,res){
	mainController.alterarEntidade(req.params,req.body,function(){
		res.json(response);
	})
});

router.post('/cadastra/:entidade',function(req,res){
	var entidade   = req.params.entidade;
	mainController.insert(entidade, req.body, function(response){
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