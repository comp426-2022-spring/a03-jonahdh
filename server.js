import express from 'express';
import minimist from 'minimist';
import {} from './modules/coin.mjs';

const app = express();
const port = 3000

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})