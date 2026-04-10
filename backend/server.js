import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import Router from "koa-router";

import user from "./src/routes/user.js";
import products from "./src/routes/products.js";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = new Koa();
const router = new Router();

connectDB();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(bodyParser());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());
app.use(user.routes()).use(user.allowedMethods());
app.use(products.routes()).use(products.allowedMethods());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
