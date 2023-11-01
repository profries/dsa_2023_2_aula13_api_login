const express = require('express')
const loginRouter = require('./router/login_router')
const produtoRouter = require('./router/produto_router');
const acessoMiddleware = require('./middleware/acesso_middleware')

const app = express()
const port = 3000

app.use(express.json());

app.use((req, res, next) => {
  console.log('Metodo '+ req.method);
  next();
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api/login', loginRouter);

app.use(acessoMiddleware.verificarAcesso);

app.use('/api/produtos', produtoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})