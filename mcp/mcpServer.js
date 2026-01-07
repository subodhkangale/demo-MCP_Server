import { MCPServer } from "@modelcontextprotocol/sdk";
import { getUserById } from "./services/userService.js";
import { getOrdersByUser, createOrder } from "./services/orderService.js";

const server = new MCPServer({
  name: "demo-mcp-server",
  version: "1.0.0"
});

// MCP tools
server.tool("get_user", async ({ id }) => getUserById(id));
server.tool("get_orders", async ({ userId }) => getOrdersByUser(userId));
server.tool("create_order", async ({ order }) => createOrder(order));

server.start();
console.log("MCP Server started...");
