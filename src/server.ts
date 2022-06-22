import express from "express";

const app = express();
const port = 3000;

app.get('/ping', function(req, res) {
    res.send("pong")
});

app.listen(port, () => console.log(`Server running at port ${port}`));
