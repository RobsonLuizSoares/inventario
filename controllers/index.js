const home = (req, res) => {
  res.render('home')
}

const escolha = (req, res) => {
  res.render('escolha')
}

module.exports = {
  home,
  escolha
}