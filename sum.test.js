const sum = require("./sum");

test("Add two numbers successfully", () => {
  expect(sum(1, 2)).toBe(3);
});
