// circular linked List 
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        let newNode = new Node(data);
        if(this.head==null){
            newNode.next = newNode;
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while(tail.next!==this.head){
            tail=tail.next;
        }
        newNode.next = this.head;
        tail.next = newNode;
        this.head=newNode;

    }
    print(){
        if(this.head === null)return;
        let curr = this.head;
        while(curr.next !== this.head){
            console.log(curr.data);
            curr=curr.next;
        }
        console.log(curr.data);
    }
    size(){
        if(this.head===null)return;
        let cnt = 0;
        let curr = this.head;
        do{
            cnt++;
            curr=curr.next;
        }while(curr.next!==this.head);
        return cnt;
    }
    addLast(data){
        let newNode = new Node(data);
        if(this.head===null){
            newNode.next = newNode;
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while(tail.next!==this.head){
            tail=tail.next;
        }
        tail.next = newNode;
        newNode.next = this.head;

    }
    addAt(idx,data){
        
    }
    search(val){
        if(this.head===null)return false;
        let cnt = 0;
        let curr = this.head;
        do{
            cnt++;
            if(curr.data===val)
                return cnt;
            curr = curr.next;
        }while(curr!==this.head);
        return "not here !";
    }

}

let circularList = new CircularLinkedList();
circularList.addFirst(10);
circularList.addFirst(20);
circularList.print();
console.log("size-> ",circularList.size())
circularList.addLast(0);
circularList.print();

console.log(" your Node index  => ",circularList.search(0))
console.log("size-> ",circularList.size())