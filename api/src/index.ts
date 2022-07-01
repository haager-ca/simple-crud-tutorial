import * as express from "express";
import routes from "./routes/index";
import { createConnection } from "typeorm";
import { User } from "./entities/user"
import "reflect-metadata";


const connection = createConnection({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "simplecrudtutorial",
    entities: [User]
}).then(async (connection) => {
    
    const app = express();


    app.use("/api", routes);

    app.listen(3000, function () {
        console.log("Server started on port 3000!");
    });
})

/* 

    console.log("Connected");
    await connection.synchronize();
    console.log("Synchronized!");

    const u = new User();
    u.name = "cool";
    connection.manager.save(u);
*/


/*app.get("*", function (req, res) {
    res.send("Diese Seite existiert nicht!")
});*/



/* GET -> Anzeige
   POST -> Hinzufügen/ Aktualiesieren
   DELET -> Löschen
*/