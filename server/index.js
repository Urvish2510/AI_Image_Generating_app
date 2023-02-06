import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "51mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  try {
    res.send("It's Running Bro!!!");
  } catch (error) {
    console.log(error);
  }
});

const startServer = async () => {
  try {
    connectDB(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.lmkjir0.mongodb.net/?retryWrites=true&w=majority`
    );
    app.listen(8080, () =>
      console.log("Server is running on http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
