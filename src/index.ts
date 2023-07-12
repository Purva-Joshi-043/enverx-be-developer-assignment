import express from "express";
import { config } from "dotenv";
config();
import bodyParser from "body-parser";
import routes from "./routes";
import connectDB from "./db";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB(); // Connect to MongoDB
});
