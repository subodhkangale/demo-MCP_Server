Below is a **clean, developer-level `README.md`** you can drop directly into your project.
It’s written assuming **Node.js + Claude Desktop + MCP**, and it matches the modular architecture you built.

You can copy-paste this **as-is**.

---

```md
# Modular MCP Server (Node.js)

A **modular Model Context Protocol (MCP) server** built with **Node.js**, designed to work with **Claude Desktop**.

This project demonstrates:
- A clean, production-style MCP architecture
- Modular tool/services loading (one file = one tool)
- Safe lifecycle management for Claude (stdio-based)
- Easy extensibility for future services

---

## ✨ Features

- 🧩 **Modular services** — add a new tool by creating a file
- 🔌 **Claude Desktop compatible** (stdio transport)
- 📦 **ES Modules** (`import/export`)
- 🛡️ Safe process lifecycle (prevents unexpected disconnects)
- 🧪 Ideal for learning, testing, and experimentation

---

## 📁 Project Structure

```

basic_MCP/
├── index.js                # MCP server entry point
├── package.json
├── services/               # MCP tools (one file per tool)
│   ├── hello.js
│   ├── simple_ai.js
│   ├── add_numbers.js
│   └── map_lookup.js
└── utils/
└── logger.js

````

---

## 🛠️ Requirements

- **Node.js 18+**
- **Claude Desktop**
- macOS (tested)

Check Node version:
```bash
node -v
````

---

## 📦 Installation

```bash
cd basic_MCP
npm install
```

---

## ▶️ Running the Server Manually

```bash
node index.js
```

Expected output:

```
Loaded service: hello
Loaded service: simple_ai
Loaded service: add_numbers
Loaded service: map_lookup
MCP server running
```

The process **must stay running**. If it exits, Claude will disconnect.

---

## 🔌 Connecting to Claude Desktop

Edit the Claude config file:

```text
~/Library/Application Support/Claude/claude_desktop_config.json
```

Add:

```json
{
  "mcpServers": {
    "modular-mcp": {
      "command": "node",
      "args": ["/Users/apple/Desktop/basic_MCP/index.js"]
    }
  }
}
```

> ⚠️ Use an **absolute path**.

Restart Claude Desktop completely.

---

## 🧪 Testing in Claude

Force tool usage explicitly:

### Hello Tool

```
Use the hello tool with name "Alex"
```

### Math Tool

```
Use add_numbers with a=12 and b=30
```

### Fake AI Tool

```
Call simple_ai with prompt "Testing MCP"
```

### Map Tool

```
Use map_lookup for city "Tokyo"
```

---

## ➕ Adding a New Service

1. Create a new file in `services/`:

   ```
   services/weather.js
   ```

2. Export `name`, `schema`, and `handler`:

```js
import { z } from "zod";

export const name = "weather";

export const schema = {
  city: z.string(),
};

export const handler = async ({ city }) => {
  return {
    content: [
      { type: "text", text: `Weather for ${city}: Sunny ☀️` }
    ],
  };
};
```

3. Restart Claude Desktop.

The tool will be auto-discovered.

---

## 🧠 Important Notes

* **Do not use `process.cwd()`** for paths — Claude launches servers from a different working directory.
* Use `console.error()` for logs to avoid corrupting MCP protocol output.
* `process.stdin.resume()` is required to keep the server alive.
* Claude does not auto-reload tools — restart Claude after changes.

---

## 🐛 Debugging

View MCP logs:

```bash
tail -f ~/Library/Application\ Support/Claude/logs/mcp.log
```

Common issue:

```
Server transport closed unexpectedly
```

→ Usually means the Node process exited or crashed.

---

## 🚀 Future Improvements

* Hot-reload services
* TypeScript support
* Real AI / API integrations
* Authentication & permissions
* Health-check and diagnostics tools

---

## 📄 License

MIT (for learning and experimentation)

```

---

If you want, I can:
- Add **badges** (Node, MCP, Claude)
- Make a **production README**
- Write **inline docs for each service**
- Convert this to **TypeScript README**

Just tell me 👍
```
