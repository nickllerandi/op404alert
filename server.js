const express = require("express");
const bodyParser = require("body-parser");
const request = require("request-promise-native");

const app = express();

app.get('/op404alertfios', (req, res) => {
    request({
        uri: 'https://api.observepoint.com/v2/web-audits/44210/runs/657479/results/tag/status-codes',
        headers: {
            // q: req.params.city,
            authorization: 'api_key ODZpY20wcmR0Y3V1bm0wb2RwY2YwN3UwbnBiNTJybDVpN3NlZmhqNGdlMWlydXA3c3FvNXVjcjFkMCY4MDUzJjE1MjIwNzUyOTc2MzQ'
        },
        body: "{}",
        json: true
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        })
});

app.listen(3000, () => {
    console.log("running on 3000");
});