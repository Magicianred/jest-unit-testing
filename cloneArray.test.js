const cloneArray = require("./cloneArray");

test("Cloned array created successfully", () => {
  const myArr = [1, 2, 3];
  expect(cloneArray(myArr)).toStrictEqual(myArr);
});
