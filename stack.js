// let palind = "abcd";
// let arr = [];
// let st = "";
// for (let i = 0; i < palind.length; i++) {
//     arr.push(palind[i]);
    
// }
// console.log(arr);
// for ()

class Stack {
    constructor(items) {
        this.items = items;
    }

    push(elements) {
        this.items.push(elements);
    }

    pop() {
        if (this.items.length == 0) {
            return "Underflow";
        }
        this.items.pop();
    }

    peek() {
        //Returns last element of array
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        //checks whether array is empty or not
        return this.items.length == 0;
    }

    printStack(){
        var st = ""
        for (let i = 0; i < this.items.length; i++){
            st += this.items[i] + " ";
        }
        return st;
    }
}


var stack = new Stack([1, 2, 3, 4]);
stack.push(20);
stack.push(10);

console.log(stack.printStack());
console.log(stack.peek());

