import express from "express";
import bordyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import flash from "connect-flash";
import session from "./config/session";
import passPort from 'passport';
import connectDB from './config/connectDB';

require("dotenv").config();
let app = express();

//config

app.use(flash());
app.use(bordyParser.json());
app.use(bordyParser.urlencoded({ extended: true }));


//config session
session.configSession(app);

connectDB();
viewEngine(app);



// config Passportjs
app.use(passPort.initialize());
app.use(passPort.session());

initWebRoutes(app);

let port = process.env.PORT || 9999;


app.listen(port, () => {
  console.log("Server chạy tại cổng:" + port);
});
