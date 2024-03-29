import { app } from "./app.js";
import { config } from "dotenv";
import { connectDatabase } from "./config/database.js";

config({
    path: "./config/config.env"
})

connectDatabase();

app.get("/", (req, res) => {
    res.send("<h1>Working Fine Properly</h1>")
})

app.listen(process.env.PORT, () => {
    console.log("server is running on port " + process.env.PORT);
})
