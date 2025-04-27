function isEveryValueArray(arr) {
    return Array.isArray(arr) && arr.every(item => Array.isArray(item));
  }
  