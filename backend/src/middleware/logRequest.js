const logRequest = function (req, res, next) {
  const { method, url } = req

  const logLabel = `[${method.toUpperCase()}] ${url}`

  console.log(logLabel)

  return next() // Prossegue para o próximo middleware
}

module.exports = logRequest