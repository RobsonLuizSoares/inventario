const UnidadeModel = (sequelize, DataTypes) => {
  const Unidade = sequelize.define('Unidade', {
    local: DataTypes.STRING,
    ul: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    responsavel: DataTypes.STRING,
    bens: DataTypes.INTEGER,
    termo: DataTypes.STRING,
    localizados: DataTypes.STRING,
    observacao: DataTypes.STRING
  })
  return Unidade
}


module.exports = UnidadeModel