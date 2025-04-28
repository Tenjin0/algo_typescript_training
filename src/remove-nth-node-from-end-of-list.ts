import { inspect } from "util"

// Given the head of a linked list, remove the nth node from the end of the list and return its head.


export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


export function removeNth(head: ListNode | null, n: number, current: number): ListNode | null {
    console.log('removeNth', head)
    if (n + 1 === current) {
        const listNode = head?.next
        if (listNode) {
            head.next = listNode.next
            listNode.next = null
        }
        return listNode || null
    }
    if (head?.next) {
        return removeNth(head.next, n, current + 1)
    }
    return null
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let total = 1
    let currentListNode = head
    while (currentListNode?.next) {
        total++
        currentListNode = currentListNode.next
    }
    console.log('total', total, "n", n)
    const nth = total + 1 - n
    if (head && total + 1 - n === 1) {
        head = head.next
        return head
    } 
    let current = 1
    let previousNode = null
    currentListNode = head
    while (current < nth && currentListNode?.next) {
        previousNode = currentListNode
        currentListNode = currentListNode.next
        current++
    }
    if (previousNode && current === nth && currentListNode) {
        previousNode.next = currentListNode.next
    }
    return head
   

}



// const l5 = new ListNode(5)
// const l4 = new ListNode(4, l5)
// const l3 = new ListNode(3, l4)
const l2 = new ListNode(2)
const l1 = new ListNode(1, l2)
console.log(inspect(l1, false, 10))

console.log(removeNthFromEnd(l1, 1))
