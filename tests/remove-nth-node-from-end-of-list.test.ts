import assert from "node:assert"
import test, { beforeEach } from "node:test"

import { ListNode, removeNthFromEnd, removeNth} from "../src/remove-nth-node-from-end-of-list"

it('1_1: synchronous passing test', (t) => {
  const l2 = new ListNode(2)
  const l1 = new ListNode(1, l2)
  const result = removeNthFromEnd(l1, 1)
  expect(result).toEqual(new ListNode(1, null))
  t()

});

it('1_2: synchronous passing test', (t) => {
    const l2 = new ListNode(2)
    const l1 = new ListNode(1, l2)
    const result = removeNthFromEnd(l1, 2)
    expect(result).toEqual(new ListNode(2, null))
    t()

});
  