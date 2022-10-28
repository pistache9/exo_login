import dotenv from "dotenv";
import express, { urlencoded } from "express";
import path from "path";
import { fileURLToPath } from "url";

import route from "./routes/routes.js";
import mongoose from "mongoose";

// ==========
// App initialization
// ==========

dotenv.config();
const { APP_HOSTNAME, APP_PORT, NODE_ENV } = process.env;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "pug");
app.locals.pretty = (NODE_ENV !== 'production'); // Indente correctement le HTML envoyé au client (utile en dev, mais inutile en production)

// ==========
// App middlewares
// ==========

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }))

// ==========
// App routers
// ==========

app.use("/", route);

// ==========
// App start
// ==========
mongoose.connect('mongodb://localhost:27017/users').then(async ()=>{

  app.listen(APP_PORT, () => {
    console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
  });
});