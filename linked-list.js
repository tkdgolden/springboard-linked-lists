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
        this.length +=1;
    }

    /** unshift(val): add new value to start of list. */
    unshift(val) {
        const node = new Node(val);

        if (this.head === null) {
            this.head = node;
            node.next = null;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = this.head.next;
            this.head = node;
        }

        this.length +=1;
    }

    /** return previous node to the given search value */
    findPrevious(val) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if (current.val === val.val) {
                return previous;
            }
            previous = current;
            current = current.next;
        }
    }

    /** pop(): return & remove last item. */
    pop() {
        if (this.head === this.tail) {
            const last = this.tail;
            this.tail = null;
            this.head = null;
            this.length = 0;
            return last.val;
        }
        const last = this.tail;
        let secondToLast = this.findPrevious(last);
        secondToLast.next = null;
        this.tail = secondToLast;
        this.length -=1;

        return last.val;
    }

    /** shift(): return & remove first item. */
    shift() {
        const first = this.head;
        this.head = first.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.length -=1;
        return first.val;
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

        return current.val
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
        if (current === null) {
            const node = new Node(val);
            node.next = null;
            this.head = node;
            this.tail = node;
            this.length = 1;
        } 
        else {
            let previous = null;

            while (count < idx) {
                if (current === null) {
                    throw Error;
                }
                previous = current;
                current = current.next;
                count += 1;
            }
    
            const node = new Node(val);
            node.next = current;
            previous.next = node;
    
            if (idx === this.length) {
                this.tail = node;
            }
            this.length +=1;
        }
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
        if (previous === null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        else {
            previous.next = current.next;
        }
        return current.val;
    }

    /** average(): return an average of all values in the list */
    average() {
        const last = this.tail;
        if (last === null) {
            return 0;
        }
        else {
            let sum = null;
            let count = 1;
            let current = this.head;
    
            while (current !== last) {
                sum += current.val;
                count += 1;
                current = current.next;
            }
            sum += last.val;
            console.log(sum, count)
            return (sum / count);
        }
    }
}

module.exports = LinkedList;
