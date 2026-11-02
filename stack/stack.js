class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);

    newNode.next = this.top;
    this.top = newNode;

    this.length++
  }

  display(){
    let currentNode = this.top;

    while(currentNode != null){
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  pop(){
    if(this.top == null){
      console.log("Under flow")
    }

    this.top = this.top.next;
  }


}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3)
stack.pop();


stack.display();
