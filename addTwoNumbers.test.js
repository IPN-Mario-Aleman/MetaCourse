const AddTwoNumbers = require("./addTwoNumber");
const { default: TetsRunner } = require("jest-runner");

test("Adding two number functions", () => {
    expect(AddTwoNumbers(1,2)).toBe(3) 
})