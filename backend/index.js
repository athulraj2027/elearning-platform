const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const adminRoutes = require("./Routes/AdminRoutes/index");
const userRoutes = require("./Routes/UserRoutes/index");
const connectDB = require("./config/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use("/", userRoutes);

app.listen(PORT, () =>
  console.log(`Server connected in port number : ${PORT}`)
);
