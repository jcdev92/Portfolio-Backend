const express = require("express");
const cors = require("cors");
const app = express();
const initModels = require("./db/models/initModels.models");

const { port } = require("./config");
const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const skillRouter = require("./skills/skills.router");
const socialMediaRouter = require("./socialMedia/socialMedia.router");
const projectRouter = require("./projects/projects.router");
const categoryRouter = require("./categories/categories.router");
const postRouter = require("./posts/posts.router");
const database = require("./utils/database");

// Configuración de CORS
const allowedOrigins = ["https://jcdev-portfolio-frontend.vercel.app", "http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["Authorization"], // Si es necesario
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/social-media", socialMediaRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/post", postRouter);

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
