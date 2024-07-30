const express = require("express");
const connectDB = require("./src/config/db");

const app = express();
require("dotenv").config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
//admin and user routes
app.use("/api/admin", require("./src/routes/admin"));
app.use("/api/user", require("./src/routes/user"));
app.get("/", (req, res) => {
  res.send("Welcome to the Web Development Assignment API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
