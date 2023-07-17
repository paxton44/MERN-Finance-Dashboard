/* eslint-disable prettier/prettier */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
// Only use KPI/kpis for seeding new data 
// import KPI from "./models/KPI.js";
// import { kpis } from "./data/data.js";

// Config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

console.log("Hello");

// Routing
app.use("/kpi", kpiRoutes);

// Mongoose Setup
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(async () => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
        
        // This eliminates duplicate data but !!!!!! DO NOT!!!!! use this on real apps because it will delete data unless its backed up
        // Only use KPI/kpis for seeding new data for live demo type situation
        // await mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);
    })

    .catch((error) => console.log(`${error} did not connect`));
      