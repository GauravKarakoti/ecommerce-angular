const express=require('express');
const cors=require('cors');
const app=express();
const authRouters = require("./routes/auth.route.js");
const userRouters = require("./routes/user.route.js");
const productRouter = require("./routes/product.routes.js");
const adminProductRouter = require("./routes/adminProduct.routes.js");
const cartRouter = require("./routes/cart.routes.js");
const cartItemRouter = require("./routes/cartItem.routes.js");
const orderRouter = require("./routes/order.routes.js");
const adminOrderRouter = require("./routes/adminOrder.routes.js");
const reviewRouter = require("./routes/review.routes.js");
const ratingRouter = require("./routes/rating.routes.js");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    return res.status(200).send({message: "Welcome to ECommerce API - Node", status: true});
})
app.use("/auth", authRouters);
app.use("/api/users", userRouters);
app.use("/api/products", productRouter);
app.use("/api/admin/products", adminProductRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items", cartItemRouter);
app.use("/api/orders", adminOrderRouter);
app.use("/api/admin/orders", orderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/ratings", ratingRouter);
module.exports=app;