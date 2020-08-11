import * as express from 'express';

const app = express();

app.get("/users", function (req, res) {
    res.send("Hier kommmen später die Benutzer raus!")
});

app.post("/users", function (req, res) {
 res.send("Neuer Benutzer wurde angelegt.")
});


/*app.get("*", function (req, res) {
    res.send("Diese Seite existiert nicht!")
});*/

app.listen(3000, function ()  {
 console.log("Server started on port 3000!");
});

/* GET -> Anzeige
   POST -> Hinzufügen/ Aktualiesieren
   DELET -> Löschen
*/