import { Router } from "express";
export const router = Router();


router.get("/users", function (req, res) {
    res.send("Hier kommmen später die Benutzer raus!")
});

router.get("/users/:id", function (req, res) {
    res.send("Die Daten von einem Benutzer")
});

router.post("/users", function (req, res) {
    res.send("Neuer Benutzer wurde angelegt.")
});

router.post("/users/:id", function (req, res) {
    res.send("Der Benutzer wurde aktualisiert")
});

router.delete("/users/:id", function (req, res) {
    res.send("Der Benutzer wurde gelöscht")
});

export default router;