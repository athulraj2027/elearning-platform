const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const adminRoutes = require("./Routes/AdminRoutes/index");
const StudentRoutes = require("./Routes/StudentRoutes/index");
const TutorRoutes = require("./Routes/TutorRoutes/index");
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);
app.use("/student", StudentRoutes);
app.use("/tutor", TutorRoutes);

app.listen(PORT, () =>
  console.log(`Server connected in port number : ${PORT}`)
);
