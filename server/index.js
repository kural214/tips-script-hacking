const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
    const exists = fs.readFileSync("./credentials.json");
    if (exists) {
        fs.writeFile('./credentials.json', `[{ username: 'kural', password: 123 }]`, (args) => {
            console.log(args);
        });
    }
    res.status(200).send([{ text: 'Hellow world' }]);
});

app.post('/create', async (req, res) => {
    fs.writeFile('./credentials.json', JSON.stringify(req.body), (args) => {
        console.log(args);
    });
    res.status(200).send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});