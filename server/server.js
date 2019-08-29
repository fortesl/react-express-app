const express = require('express');
const path = require('path');

const app = express();

// eslint-disable-next-line no-undef
const publicPath = path.join(__dirname, '..', 'dist');

app.use(express.static(publicPath));

app.get('*', (req, resp) => resp.sendFile(path.join(publicPath, 'index.html')));

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('server is up'));