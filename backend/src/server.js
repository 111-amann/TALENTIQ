// const express = require("express"); // package.json -> scripts -> type -> commonjs (default)
import express from "express"; // package.json -> scripts -> type -> module
import path from "path";
import cors from "cors";

import {serve} from "inngest/express";
import { ENV } from "./libs/env.js";
import { connectDB } from "./libs/db.js";

const app = express();

const __dirname = path.resolve();

//middleware
app.use(express.json());
// credentials:true meanning?? => server allows browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));

app.use("/api/inngest", serve({client:inngest, functions }));

app.get("/ok", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});
app.get("/yes", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

//make our app ready for deployment
if (ENV.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));
  } catch (error) {
    console.error("💥 Error starting the server:", error);
  }
};

startServer();
