const Sequelize = require('sequelize')
const Op = Sequelize.Op

const index = async ({ Unidade }, req, res) => {
  const unidades = await Unidade.findAll()
  res.render('unidades', { unidades })
}

const sede = async ({ Unidade }, req, res) => {
  const unidadesSede = await Unidade.findAll({
    where: {
      local: 'Sede'
    }
  })
  res.render('unidades/sede', { unidadesSede })
}

const zonas = async ({ Unidade }, req, res) => {
  const unidadesZonas = await Unidade.findAll({
    where: {
      local: 'Zonas'
    }
  })
  res.render('unidades/zonas', { unidadesZonas })
}

const anexos = async ({ Unidade }, req, res) => {
  const unidadesAnexos = await Unidade.findAll({
    where: {
      local: 'Anexos'
    }
  })
  res.render('unidades/anexos', { unidadesAnexos })
}

const outros = async ({ Unidade }, req, res) => {
  const unidadesOutros = await Unidade.findAll({
    where: {
      local: 'Outros'
    }
  })
  res.render('unidades/outros', { unidadesOutros })
}

const createForm = (req, res) => {
  res.render('unidades/create')
}

const createProcess = async ({ Unidade }, req, res) => {

  await Unidade.create(req.body)
  res.redirect('/unidades')
}

const editForm = async ({ Unidade }, req, res) => {
  const options = [
    { id: 'Pendente', name: 'Termo Pendente' },
    { id: 'Termo Entregue', name: 'Termo Entregue' }

  ]
  const labels = [
    { id: 'Há Bens Não Lidos', name: 'Há Bens Não Lidos' },
    { id: 'Todos Lidos', name: 'Todos Lidos' }
  ]

  const unidades = await Unidade.findAll({
    where: {
      id: req.params.id
    }
  })
  res.render('unidades/edit', { unidades, labels, options })
}

const editProcess = async ({ Unidade }, req, res) => {
  await Unidade.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.redirect('/unidades')
}

const searchNome = async ({ Unidade }, req, res) => {
  let { term } = req.query

  term = term.toLowerCase()

  await Unidade.findAll({
    where: {
      nome: { [Op.like]: '%' + term + '%' }
    }
  })
    .then(unidades => res.render('unidades', { unidades }))
    .catch()
}

const searchResp = async ({ Unidade }, req, res) => {
  let { resp } = req.query

  resp = resp.toLowerCase()

  await Unidade.findAll({
    where: {
      responsavel: { [Op.like]: '%' + resp + '%' }
    }
  })
    .then(unidades => res.render('unidades', { unidades }))
    .catch()
}

module.exports = {
  index,
  sede,
  zonas,
  anexos,
  outros,
  createForm,
  createProcess,
  editForm,
  editProcess,
  searchNome,
  searchResp
}