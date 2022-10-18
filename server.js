import express from 'express';
import minimist from 'minimist';
import {} from './modules/coin.mjs';

const args = minimist(process.argv.slice(2));

args['port'];

const app = express();
const HTTP_PORT = args.port || 3000;

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
});

