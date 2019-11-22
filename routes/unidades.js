const express = require('express')
const router = express.Router()
const unidadesController = require('../controllers/unidades')

const model = require('../models/index')
//Routes
router.get('/sede', unidadesController.sede.bind(null, model.models))
router.get('/zonas', unidadesController.zonas.bind(null, model.models))
router.get('/anexos', unidadesController.anexos.bind(null, model.models))
router.get('/outros', unidadesController.outros.bind(null, model.models))
router.get('/', unidadesController.index.bind(null, model.models))
router.get('/create', unidadesController.createForm)
router.post('/create', unidadesController.createProcess.bind(null, model.models))
router.get('/edit/:id', unidadesController.editForm.bind(null, model.models))
router.post('/edit/:id', unidadesController.editProcess.bind(null, model.models))
router.get('/search', unidadesController.searchNome.bind(null, model.models))
router.get('/searchResp', unidadesController.searchResp.bind(null, model.models))

module.exports = router