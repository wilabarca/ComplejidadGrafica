export class QuickSort {
    static sort(array) {
        if (array.length <= 1) return array;
        let pivot = array[Math.floor(array.length / 2)];
        let left = array.filter(x => x < pivot);
        let middle = array.filter(x => x === pivot);
        let right = array.filter(x => x > pivot);
        return [...QuickSort.sort(left), ...middle, ...QuickSort.sort(right)];
    }
}
