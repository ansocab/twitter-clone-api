const express = require("express");
const userRouter = require("./routes/users");
const messageRouter = require("./routes/messages");

const { PORT = 4000 } = process.env;
const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => console.log(`Server successfully running on PORT ${PORT}`));

