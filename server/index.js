/* eslint-disable prettier/prettier */
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";

// These are for seeding the db from the data.js file in the data folder within server

// import KPI from "./models/KPI.js";
// import Product from "./models/Product.js";
// import Transaction from "./models/Transaction.js";
// import { kpis, products, transactions } from "./data/data.js";
// import { products } from "./data/data.js";
// import { transactions } from "./data/data.js";

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
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

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

        // Transaction.insertMany(transactions);
    })

    .catch((error) => console.log(`${error} did not connect`));
      