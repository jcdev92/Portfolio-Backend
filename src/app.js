const express = require("express");
const app = express();
const initModels = require("./models/initModels.models");

const { port } = require("./config");
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const skillRouter = require("./skills/skills.router");
const socialMediaRouter = require("./socialMedia/socialMedia.router");
const projectRouter = require("./projects/projects.router");
const database = require("./utils/database");

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/social-media", socialMediaRouter);
app.use("/api/v1/project", projectRouter);

database
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

database
  .sync()
  .then(() => console.log("Database synced..."))
  .catch((err) => console.log("Error: " + err));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
    user: `http://localhost:${port}/api/v1/user`,
  });
});

initModels();

app.listen(port, () => console.log(`Server running on port ${port}`));
