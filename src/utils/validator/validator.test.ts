import { isHelloWorld } from "./validator";

import { expect, it, describe } from "vitest";

describe("isHelloWorld()", () => {
  it("should return true if  provided as helloworld", () => {
    const text = "helloworld";

    const result = isHelloWorld(text);

    expect(result).toBeTruthy();
  });

  it("should return false if provided as HelloWorld", () => {
    const text = "HelloWorld";

    const result = isHelloWorld(text);

    expect(result).toBeFalsy();
  });
});
