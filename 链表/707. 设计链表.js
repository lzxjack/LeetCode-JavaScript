class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.start = null;
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) return -1;
        let current = this.start;
        while (0 < index) {
            current = current.next;
            index--;
        }
        return current ? current.val : -1;
    }

    addAtHead(val) {
        let tempNode = new Node(val);
        tempNode.next = this.start || null;
        this.start = tempNode;
        this.length = this.length ? ++this.length : 1;
    }

    addAtTail(val) {
        let tailNode = new Node(val);
        let tempNode = this.start;
        while (tempNode && tempNode.next) {
            tempNode = tempNode.next;
        }
        if (tempNode) {
            tempNode.next = tailNode;
        } else {
            tempNode = tailNode;
            this.start = tailNode;
        }

        this.length = this.length ? ++this.length : 1;
    }

    addAtIndex(index, val) {
        if (index <= 0) return this.addAtHead(val);
        if (index === this.length) return this.addAtTail(val);
        if (index > this.length) return;

        let addNode = new Node(val);
        let cur = this.start;

        while (index-- > 1) {
            cur = cur.next;
        }
        addNode.next = cur.next;
        cur.next = addNode;
        this.length++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.length) return;
        if (index) {
            let i = 1;
            let cur = this.start;
            while (index - 1 >= i) {
                cur = cur.next;
                i++;
            }
            if (cur && cur.next) {
                cur.next = cur.next.next;
            }
            this.length--;
        } else {
            this.start = this.start.next;
            this.length--;
        }
    }
}
