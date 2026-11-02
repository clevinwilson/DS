class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = new Node(value);
    if(this.head == null){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail= newNode

  }

  display(){
    let currentNode = this.head;

    if(currentNode == null){
      console.log('List is empty')
    }

    while(currentNode != null){
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  delete(value) {
    if(this.head == null) {
      console.log("List is empty");
    }

    let currentNode = this.head;
    let prevNode = null;
    
    if(value === this.head.value){
      this.head = currentNode.next;
      currentNode.next = null
      return;
    }

    while(currentNode != null && currentNode.value != value){
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    if(currentNode == null){
      return;
    }

    if(currentNode == this.tail){
      this.tail = prevNode;
      prevNode.next = null;
      return;
    }

    prevNode.next = currentNode.next;
    currentNode.next = null;

  }

  insert(nextTo, value){

    let currentNode = this.head;
    const newNode = new Node(value);


    while(currentNode != null && currentNode.value != nextTo){
      currentNode = currentNode.next;
    }

    if(currentNode == null){
      console.log('Value not found')
      return;
    }

    if(currentNode === this.tail){
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
 
  }
}

const sLinkedList = new LinkedList();
sLinkedList.append(2);
sLinkedList.append(3);
sLinkedList.append(13);
sLinkedList.append(10);
sLinkedList.display();

// console.log('After delete')
// sLinkedList.delete(13);

console.log("After insert")
sLinkedList.insert(3,99)
sLinkedList.insert(10,100)
sLinkedList.display();


