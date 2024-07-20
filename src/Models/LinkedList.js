import { Node } from './Node.js';
import { RadixSort } from './RadixSort.js';

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    toArray() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        return result;
    }

    bubbleSort() {
        let array = this.toArray();
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        this.head = null;
        for (let value of array) {
            this.append(value);
        }
    }

    radixSort() {
        let array = this.toArray();
        array = RadixSort.sort(array); 
        this.head = null;
        for (let value of array) {
            this.append(value);
        }
    }
}
