import * as express from "express";
import routes from "./routes/index";

const app = express();

app.use("/api", routes);

/*app.get("*", function (req, res) {
    res.send("Diese Seite existiert nicht!")
});*/

app.listen(3000, function () {
    console.log("Server started on port 3000!");
});

/* GET -> Anzeige
   POST -> Hinzufügen/ Aktualiesieren
   DELET -> Löschen
*/