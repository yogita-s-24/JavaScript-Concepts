function getMinMax(arr) {
    if (arr.length === 0) {
        return null; 
    }

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return [min, max];
}

console.log(getMinMax([2,4,5,3,2,23,54]));