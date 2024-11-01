import express from 'express';

const app = express()
app.use(express.json())

// app.post('/criar_conta', criar_conta)


app.listen(3000, () => console.log('API RODANDO EM PORT 3000'));