// Rewrite the insertion-sort procedure to sort into monotonically decreasing instead of 
// monotonically increasing order

// instead searching from right to left and stopping once you've found a card less than the key

// search from right to left, shift each element to the right, stop once you've found a card greater, insert to the right of it (easier)
// OR
// search from left to right, stop once you've found a card smaller, insert to the left of it and
// push the rest of the elements to the right (harder)


function insertDecreasing(arr, n) {
    console.log(`starting arr: ${JSON.stringify(arr)}`);
    for (let i=1; i < n; i++) {
        j = i - 1; 
        let key = arr[i];
        console.log(`new key ${key}`);
        while (j > -1 && arr[j] < key) {
            console.log(`shifting arr[j] ${arr[j]}`);
            arr[j+1] = arr[j];
            j--;
        }
        console.log(`inserting key ${key} to ${j+1}`)
        arr[j+1] = key;
        console.log(arr);
    }

    return arr;
}

const input = [1,3,4,8,20];

// expected output [20,8,4,3,1]
console.log(insertDecreasing(input, input.length));

