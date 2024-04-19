const { sum, multiply, createUser } = require("./main");

describe("Math", () => {
  it("should add 1 + 1", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(null, null)).toBe(0);
    expect(sum(-100, 100)).toBe(0);
    expect(sum(10000000000000, 10000000000000)).toBe(20000000000000);
  });

  //   it("should multiply 2 by 2", () => {
  //     expect(multiply(2, 2)).toBe(4);
  //   });

  //   it("should create user", () => {
  //     let user = createUser("A B");

  //     expect(user).toMatchSnapshot();
  //   });
});
