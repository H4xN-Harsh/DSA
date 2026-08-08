// Linked list

// constructor

class Node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}


// Linked list Class

class LinkedList{
    constructor(){
        this.head =null
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    size(){
        let cnt = 0;
        let curr = this.head;
        while(curr){
            cnt++;
            curr = curr.next;
        }
        return cnt;
    }

    addAt(idx,data){
        if(idx<0||idx>this.size()){
            console.error("invalid index");
        }
        const newNode = new Node(data);
        if(idx===0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        let curr = this.head;
        for(let i = 0;i<idx-1;i++){
            curr=curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }

    removeTop(){
        if(!this.head)return;
        this.head = this.head.next;
    }
    removeEnd(){
        if(!this.head)return;
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
    }

    removeAt(idx){
        if(idx<0||idx>this.size()){
            console.error("Invalid Index! ");
            return;
        }
        if(idx ===0){
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        for(let i = 0;i<idx-1;i++){
            curr = curr.next;
        }
        if(curr.next){
            curr.next = curr.next.next;
        }
    }
    print(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.addFirst(5);
linkedList.addFirst(10);
linkedList.addFirst(15);
linkedList.addFirst(20);
linkedList.addFirst(25);
linkedList.addFirst(30);

// linkedList.print();


linkedList.addLast(-5);
linkedList.addLast(-10);
linkedList.addLast(-15);
linkedList.addLast(-20);
// linkedList.print();
console.log(linkedList.size())
linkedList.removeTop();
linkedList.addAt(3,1000000)
linkedList.removeEnd();
linkedList.removeAt(3);
linkedList.print();
