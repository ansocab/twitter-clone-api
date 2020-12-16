const express = require("express");
const userRouter = require("./routes/users");
const messageRouter = require("./routes/messages");
const cors = require("cors");

const { PORT = 4000 } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => console.log(`Server successfully running on PORT ${PORT}`));

