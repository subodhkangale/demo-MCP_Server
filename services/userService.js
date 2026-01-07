const users = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" }
];

export const getUserById = (id) => users.find(u => u.id === id);
