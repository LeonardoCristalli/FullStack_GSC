"use strict";
class Stack {
    constructor() {
        this.elements = [];
    }
    push(element) {
        if (!this.elements.includes(element)) {
            this.elements.push(element);
        }
    }
    pop() {
        if (this.elements.length > 0) {
            this.elements.pop();
        }
    }
    size() {
        return this.elements.length;
    }
}
let my_stack = new Stack();
my_stack.push(1);
my_stack.push(2);
my_stack.push(2);
my_stack.push(3);
console.log("Stack size: ", my_stack.size());
my_stack.pop();
console.log("Stack size after pop: ", my_stack.size());
