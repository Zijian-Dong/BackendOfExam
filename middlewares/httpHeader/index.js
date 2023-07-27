const httpHeader = (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'POST,GET,TRACE,OPTIONS,PATCH,PUT,DELETE')
  res.header('X-Powered-By', '3.2.1')
  next()
}

module.exports = httpHeader
