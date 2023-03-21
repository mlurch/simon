const express = require('express');
const app = express();

//service port, font end code is statically hosted at 3000
const port = process.argv.length > 2 ? process.argv[2] : 3000; 

//JSON body parsing using built in middleware
app.use(express.json());

//serve up the front-end static content
app.use(express.static('public'));

//router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

//GetScores
apiRouter.get('/scores', (_req, res) => {
    res.send(scores);
});

//SubmitScore
apiRouter.post('/score', (req, res) => {
    scores = updateScores(req.body, scores);
    res.send(scores);
});

//Return the application's default page if path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}, bbg`);
});