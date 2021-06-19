require('dotenv').config();
const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const videos = [
    "3DOANrkKs8E",
    "K0E5h3bRBq8",
    "V4fDgv2jij8",
    "HseuMJZqU0I",
    "F7oaYlu4tNc",
]


// if (process.env.NODE_ENV != 'development') {
    app.get('/api/videos', (req, res) => {
        res.send(videos);
    })

    app.use(express.static(path.join(__dirname, 'front/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'front/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error);
            }
        }))
    })

// }

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando!")
})