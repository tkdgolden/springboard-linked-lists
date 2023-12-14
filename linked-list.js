/** Node: node for a singly linked list. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */
class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */
    push(val) {
        const node = new Node(val);

        if (this.head === null) this.head = node;

        if (this.tail !== null) this.tail.next = node;

        this.tail = node;
    }

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        const node = new Node(val);

        if (this.head === null) {
            this.head = node;
        }
        else {
            this.head = this.head.next;
            this.head = node;
        }
    }

    /** return previous node to the given search value */
    findPrevious(val) {
        let current = this.head;
        let previous = null;

        while (current !== null) {
            if (current.val === val) return previous;

            previous = current;
            current = current.next;
        }

        return previous;
    }

    /** pop(): return & remove last item. */
    pop() {
        const last = this.tail;

        let secondToLast = this.findPrevious(last);
        secondToLast.next = null;

        return last.val;
    }

    /** shift(): return & remove first item. */
    shift() {
        const first = this.head;
        const second = first.next;
        this.head = second;

        return first;
    }

    /** getAt(idx): get val at idx. */
    getAt(idx) {
        if (idx < 0) {
            throw Error;
        }

        let count = 0;
        let current = this.head;

        while (count < idx) {
            if (current === null) {
                throw Error;
            }
            count += 1;
            current = current.next;
        }

        return current.vl
    }

    /** setAt(idx, val): set val at idx to val */
    setAt(idx, val) {
        if (idx < 0) {
            throw Error;
        }

        let count = 0;
        let current = this.head;

        while (count < idx) {
            if (current === null) {
                throw Error;
            }
            count += 1;
            current = current.next;
        }

        current.val = val;
    }

    /** insertAt(idx, val): add node w/val before idx. */
    insertAt(idx, val) {
        if (idx < 0) {
            throw Error;
        }

        let count = 0;
        let current = this.head;
        let previous = null;

        while (count < idx) {
            if (current === null) {
                throw Error;
            }
            count += 1;
            previous = current;
            current = current.next;
        }

        const node = new Node(val);
        node.next = current;
        previous.next = node;
    }

    /** removeAt(idx): return & remove item at idx, */
    removeAt(idx) {
        if (idx < 0) {
            throw Error;
        }

        let count = 0;
        let current = this.head;
        let previous = null;

        while (count < idx) {
            if (current === null) {
                throw Error;
            }
            count += 1;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        return current.val;
    }

    /** average(): return an average of all values in the list */
    average() {
        const last = this.tail;
        let sum = null;
        let count = 0;
        let current = this.head;

        while (current !== last) {
            sum += current.val;
            count += 1;
            current = current.next;
        }

        return (sum / count);
    }
}

module.exports = LinkedList;
