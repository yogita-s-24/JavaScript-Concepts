function parseNumber(str) {
  if (typeof str !== "string") return null;

  const binary = /^[+-]?0b[01]+$/i;
  const octal = /^[+-]?0o[0-7]+$/i;
  const hex = /^[+-]?0x[0-9a-f]+$/i;
  const decimal = /^[+-]?[0-9]+$/;

  if (binary.test(str)) {
    return parseInt(str, 2);
  } else if (octal.test(str)) {
    return parseInt(str, 8);
  } else if (hex.test(str)) {
    return parseInt(str, 16);
  } else if (decimal.test(str)) {
    return parseInt(str, 10);
  } else {  
    return null;
  }
}
