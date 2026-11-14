const express = require("express");
const path = require("path");

const app = express();

const PORT = 8000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", (req, res) => {
    res.send("ClauseShield Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});