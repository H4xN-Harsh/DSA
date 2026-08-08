// doubly linkedlist
class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }
    addTop(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
        this.head = newNode;
    }
    addTail(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        newNode.prev=curr;
        curr.next=newNode;
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
            console.error("Invalid index!");
        }
        const newNode = new Node(data);
        if(idx===0){
            newNode.next=this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode;
        }
        let curr = this.head;
        for(let i = 0;i<idx;i++){
            curr = curr.next;
        }
        newNode.prev = curr;
        newNode.next=curr.next;
        if(curr.next){
            curr.next.prev=newNode;
        }
        curr.next = newNode;
    }
    removeTop(){
        if(!this.head)return;
        this.head = this.head.next;
        if(this.head)this.head.prev = null;
    }
    removeTail(){
        if(!this.head)return;
        if(!this.head.next){
            this.head = null;
            return;
        }
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
    }
    removeAt(idx){
        if(idx<0||idx>this.size()){
            console.error("Invalid index!");
        }
        if(idx === 0){
            this.head = this.head.next;
            if(this.head){
                this.head.prev = null;
            }
        }
        let curr = this.head;
        for(let i = 0;i<idx-1;i++){
            curr = curr.next;
        }
        if(curr.next){
            curr.next=curr.next.next;
            if(curr.next){
                curr.next.prev = curr;
            }
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



const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.addTop(29);
doublyLinkedList.addTop(30);
doublyLinkedList.addTail(49);
doublyLinkedList.addTail(59);
doublyLinkedList.addAt(2,69);
doublyLinkedList.print();
console.log("-----------------------------------------------------------------------------")
doublyLinkedList.removeAt(2);
doublyLinkedList.print();
console.log("-----------------------------------------------------------------------------")
doublyLinkedList.removeTop();
doublyLinkedList.print();
console.log("-----------------------------------------------------------------------------")
doublyLinkedList.removeTail();
doublyLinkedList.print();
console.log("size->",doublyLinkedList.size())




// flatten a doubly linked list ;

