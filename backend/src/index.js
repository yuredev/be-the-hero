const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors({
    origin,
}));

// é necessário usar explicitar ao app que receberá jsons no corpo

app.listen(3333, () => console.log('listening at localhost:3333'));
