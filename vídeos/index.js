require('dotenv').config();
const exp = require('constants');
const express = require('express');
const app = express();
const path = require('path');

const videos = [
    "sUm3mvZii6Y",
    "DvwMVIJbOJk",
    "Zu073TPW3E8",
    "mvMJl_0oQ_8",
    "MMF9I_9DAcs",
]


if (process.env.NODE_ENV != 'development') {
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

}

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando!")
})