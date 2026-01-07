import express from "express";
import { getUserById } from "./services/userService.js";
import { getOrdersByUser, createOrder } from "./services/orderService.js";

const app = express();
app.use(express.json());

app.get("/users/:id", (req, res) => {
  const user = getUserById(req.params.id);
  res.json(user);
});

app.get("/orders/:userId", (req, res) => {
  const userOrders = getOrdersByUser(req.params.userId);
  res.json(userOrders);
});

app.post("/orders", (req, res) => {
  const newOrder = createOrder(req.body);
  res.json(newOrder);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`REST API running on ${PORT}`));
