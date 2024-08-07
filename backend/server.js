import express from "express";
import cors from "cors";
import "./config/mongodb.js";

import productRoutes from "./routes/productoRoute.js";
import userRoutes from "./routes/userRoute.js";
import pirateRoutes from "./routes/pirateRoute.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);
app.use(pirateRoutes);

app.listen(8080);