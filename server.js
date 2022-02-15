const path = require('path')
import express from 'express'
import fs from 'fs';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const app = express();
const PORT = 3000;


app.use('**', (req, res) => {
    fs.readFile(path.resolve("./dist/index.html"), "utf8", (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`)
        );
    });
   
     
    
});

app.use(express.static(path.resolve(__dirname, '..','dist')))

app.listen(PORT, () => {
    console.log(`App running ${PORT}`);
    
})