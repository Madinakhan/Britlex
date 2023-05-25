const express = require("express");
const cors = require("cors");
const { userRouter } = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
const PORT = 8080;

app.listen(PORT, () => console.log(`🌀 Listening on port ${PORT}... 🌀`));
