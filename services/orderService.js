const orders = [
  { id: "101", userId: "1", product: "Laptop" }
];

export const getOrdersByUser = (userId) =>
  orders.filter(o => o.userId === userId);

export const createOrder = (order) => {
  orders.push(order);
  return order;
};
