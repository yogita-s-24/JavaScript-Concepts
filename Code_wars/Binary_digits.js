const divisibleByFive = {
  test: (binaryStr) => {
    if (!/^[01]+$/.test(binaryStr)) return false;
    return parseInt(binaryStr, 2) % 5 === 0;
  },
};
