// routes/products.js
import product from "../models/Products.js";
import Router from "koa-router";

const router = new Router({
  prefix: "/api/products",
});

//prendi TUTTI i prodotti
router.get("/", async (ctx) => {
  try {
    const products = await product.find();
    ctx.body = products;
  } catch (err) {
    ctx.status(500).json({ error: err.message });
  }
});

//prendi prodotti per categoria
router.get("/category/:category", async (ctx) => {
  try {
    const products = await product.find({
      category: req.params.category,
    });
    ctx.body = products;
  } catch (err) {
    ctx.status(500).json({ error: err.message });
  }
});

export default router;
