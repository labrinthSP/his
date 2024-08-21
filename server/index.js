const express = require('express');
const connectDB = require('./config/db');
const app = express();
const staffRoute = require('./routes/staffRoute')
const patientRoute = require('./routes/patientRoute')
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

// Connect Database
connectDB();

app.use(
    cors({
        origin: ["http://localhost:5173", "https://doctorow.netlify.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());

app.use(express.json());

// Use the routes
app.use("/staff", staffRoute);
app.use("/patient", patientRoute);

// const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));