import users from "../models/User.js";
import Router from "koa-router";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = new Router({
  prefix: "/api/user",
});

router.post("/user/post", async (ctx) => {
  const { email, password } = ctx.request.body;

  if (!email || !password) {
    ctx.status = 400;
    ctx.body = "Email e password richiesti";
    return;
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    ctx.status = 400;
    ctx.body = "Credenziali non valide";
    return;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    ctx.status = 400;
    ctx.body = "Credenziali non valide";
    return;
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );
  ctx.body = { token };
});

export default router;
