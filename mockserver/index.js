const express = require('express')
const log = require('maxthod-logger').Logger(__filename)
var request = require('request');
const server = express()
const path = require('path');
const fs = require('fs');

const proxy_server = process.env.PROXY_SERVER || 'http://localhost:8080'
const port = process.env.MOCK_SERVER_PORT || '3001'

const base_path = '/api/v1'
const mockFolder = path.join(__dirname, 'mocks')


fs.readdirSync(mockFolder).forEach(file => {
    const type = file.split('.')[1]
    let endpoint = ""
    if (type == 'json') {
        const resource = file.split('_')[1].split('.')[0]
        endpoint = `${base_path}/${resource}`
    } else if (type == 'js') {
        const resource = file.split('.')[0]
        endpoint = `${base_path}/${resource}`
    } else {
        log.error(`Mock File not processed: ${file}`)
    }

    if (type == 'json') {
        const method = file.split('_')[0].toLowerCase()
        server[method](endpoint, function (req, res) {
            res.header("Content-Type", 'application/json');
            res.sendFile(path.join(mockFolder, file));
        })
    } else if (type == 'js') {
        server.use(endpoint, require(path.join(mockFolder, file)))
    }

});

server.use(function (req, res) {
    request(proxy_server).on('error', function (err) {
        res.status(500).json(err)
    }).pipe(res);
})


server.listen(port, () => {
    log.info(`Mock Server started on port '${port}'`)
})

