const express = require("express");
const connectDB = require("./database");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/students", routes.studentRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
