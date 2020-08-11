import * as express from 'express';

const app = express();

app.get("/", function (req, res) {
    res.send("Hello world!")
});

app.get("*", function (req, res) {
    res.send("Diese Seite existiert nicht!")
});

app.listen(3000, function ()  {
 console.log("Server started on port 3000!");
});