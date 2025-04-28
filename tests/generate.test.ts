import assert from "node:assert"

import { generate } from "../src/generate"

it('synchronous passing test', () => {
    // This test passes because it does not throw an exception.
    expect(generate(16).length).toBe(16)
  });

it('synchronous passing test', () => {
    // This test passes because it does not throw an exception.
    expect(generate(32).length).toBe(32)

  });
  