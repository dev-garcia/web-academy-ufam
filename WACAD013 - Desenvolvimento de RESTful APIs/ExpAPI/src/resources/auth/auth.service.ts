const users = [
  {
    id: 1,
    email: "aaaa@example.com",
    password: "123456",
  },
  {
    id: 2,
    email: "bbbb@example.com",
    password: "123456",
  },
];

const checkAuth = (email: string, password: string): number | null => {
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    return user.id;
  }
  return null;
};

export { checkAuth };
