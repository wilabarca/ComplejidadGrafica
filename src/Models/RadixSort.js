export class RadixSort {
    static sort(array) {
        if (array.length === 0) return array;
        
    
        const max = Math.max(...array);
        let exp = 1; 
        
        
        while (Math.floor(max / exp) > 0) {
            array = RadixSort.countingSort(array, exp);
            exp *= 10;
        }
        return array;
    }

    static countingSort(array, exp) {
        const n = array.length;
        const output = new Array(n);
        const count = new Array(10).fill(0);

        
        for (let i = 0; i < n; i++) {
            const index = Math.floor(array[i] / exp) % 10;
            count[index]++;
        }

    
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

       
        for (let i = n - 1; i >= 0; i--) {
            const index = Math.floor(array[i] / exp) % 10;
            output[count[index] - 1] = array[i];
            count[index]--;
        }

       
        for (let i = 0; i < n; i++) {
            array[i] = output[i];
        }
        return array;
    }
}
