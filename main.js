function merge(left, right) {  
    let c = [];

    while (left.length && right.length) {
        if(left[0] < right [0]) {
            c.push(left.shift());
        }
        else {
            c.push(right.shift());
        }
    }
    return c.concat(left.slice()).concat(right.slice());
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(mergeSort(left), mergeSort(right));

}

let d = [5, 2, 10, 8, 1, 4, 11, 20];
console.log (mergeSort(d));
