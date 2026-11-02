class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.front == null) {
      this.front = newNode;
    } else {
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }

  display() {
    let currentNode = this.front;
    if (this.front == null) {
      console.log("Queue empty");
    }

    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  dequeue(){
    if(this.front == null){
        console.log("Queue is empty");
    }

    this.front = this.front.next;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

queue.display();
