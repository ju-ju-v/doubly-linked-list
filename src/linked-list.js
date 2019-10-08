const Node = require('./node');

class LinkedList {
    constructor() {
        this._list = [];
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;     
    }

    append(data) {
        let node;
        if (this.length === 0) {
            node = new Node(data);
        }
        else {
            let last = this._list[this.length - 1];
            node = new Node(data, last);

            last.next = node;
            this._list[this.length - 1] = last;
        }

        this._list.push(node);
        this.length++;
        this._head = this._list[0];
        this._tail = this._list[this.length - 1];

        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        return this._list[index].data;
    }

    insertAt(index, data) {
        if(this._list[index] === undefined) {
            this.append(data);
            return true;
        }
        let node = new Node(data);
        node.next = this._list[index];
        this._list[index].prev = node;
        if(index > 0) {
            node.prev = this._list[index-1];
            this._list[index-1].next = node;
        }

        this._list.splice(index, 0, node);

        this.length++;

        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._list = [];
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        this._list.splice(index, 1);
        this._head = this._list[0];
        this._tail = this._list[this.length - 1];
        this.length--;

        return this;
    }

    reverse() {
        this._list.map(function (current) {
            let p = current.prev;
            let n = current.next;
            current.prev = n;
            current.next = p;
        })
        this._list.reverse();

        this._head = this._list[0];
        this._tail = this._list[this.length - 1];

        return this;
    }

    indexOf(data) {
        for (var index = 0; index < this.length; index++) {
            if (this._list[index].data == data) {
                return index;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
