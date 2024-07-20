import { BubbleSort, QuickSort, RadixSort } from '../Models/ArrarSort.js';
import { LinkedList } from '../Models/LinkedList.js';

function generateRandomData(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 100));
}

function measureTime(sortFunction, data) {
    const start = performance.now();
    sortFunction(data);
    const end = performance.now();
    return end - start;
}

function runSortTests() {
    const sampleData = generateRandomData(1000);

    const arrayData = [...sampleData];
    const linkedListData = [...sampleData];

    const bubbleSortArrayTime = measureTime(BubbleSort.sort, [...arrayData]);
    const quickSortArrayTime = measureTime(QuickSort.sort, [...arrayData]);
    const radixSortArrayTime = measureTime(RadixSort.sort, [...arrayData]);

    let linkedList = new LinkedList();
    linkedListData.forEach(value => linkedList.append(value));
    const bubbleSortLinkedListTime = measureTime(() => linkedList.bubbleSort(), linkedListData);
    const radixSortLinkedListTime = measureTime(() => linkedList.radixSort(), linkedListData);

    console.log('Bubble Sort (Array) Time:', bubbleSortArrayTime);
    console.log('Quick Sort (Array) Time:', quickSortArrayTime);
    console.log('Radix Sort (Array) Time:', radixSortArrayTime);
    console.log('Bubble Sort (Linked List) Time:', bubbleSortLinkedListTime);
    console.log('Radix Sort (Linked List) Time:', radixSortLinkedListTime);

    renderChart([bubbleSortArrayTime, quickSortArrayTime, radixSortArrayTime, bubbleSortLinkedListTime, radixSortLinkedListTime]);
}

function renderChart(data) {
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Bubble Sort (Array)', 'Quick Sort (Array)', 'Radix Sort (Array)', 'Bubble Sort (Linked List)', 'Radix Sort (Linked List)'],
            datasets: [{
                label: 'Tiempo de Ejecución (en ms)',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

runSortTests();
