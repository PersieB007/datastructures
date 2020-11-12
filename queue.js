//A Queue works on the FIFO(First in First Out) principle. 
//Hence, it performs two basic operations that is addition 
//of elements at the end of the queue and removal of elements from the front of the queue. 
//Like Stack, Queue is also a linear data structure.

class Queue {
    constructor(items) {
        this.items = items;
    }
    //adding element to array at last position
    enqueue(element) {
        this.items.push(element);
    }
    //deletes first element of array
    dequeue(){
        if (this.items.length == 0) {
            return "Underflow";
        }
        this.items.shift();
    }
    //Checks if array is empty
    isEmpty() {
        return this.items.length == 0;
    }
    //First element of queue
    front() {
        if (this.isEmpty){
            return "Empty array";
        }
        return this.items[0];
    }
    printQueue(){
        var st = ""
        for (let i = 0; i < this.items.length; i++){
            st += this.items[i] + " ";
        }
        return st;
    }
    pri(){
        return this
    }
}

