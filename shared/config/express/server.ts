import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";

const app = express();

const cacheControl = "private, no-cache, no-store, must-revalidate";

// Folder where app gets loaded / copied and configuration gets generated
const appDir = path.join(__dirname, "/dist");

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors());
app.use(express.static(appDir));
// app.use(express.static(assetsDir));

app.get("*", cors(corsOptions), (req: Request, res: Response) => {
  res.header("Cache-Control", cacheControl);
  res.sendfile(appDir + "/index.html");
});

app.listen(10726, () => {
  console.log("test");
  console.log(`Base Directory is ${__dirname}`);
  console.log(`Stage app directory is ${appDir}`);
});
