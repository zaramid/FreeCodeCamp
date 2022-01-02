function convertToRoman(num) {

  const romans = [];
  while (num > 0) {
    if (num >= 1000) {
      romans.push('M');
      num -= 1000;
    } else if (num >= 900) {
      romans.push('CM');
      num -= 900;
    } else if (num >= 500) {
      romans.push('D');
      num -= 500;
    } else if (num >= 400) {
      romans.push('CD');
      num -= 400;
    } else if (num >= 100) {
      romans.push('C');
      num -= 100;
    } else if (num >= 90) {
      romans.push('XC');
      num -= 90;
    } else if (num >= 50) {
      romans.push('L');
      num -= 50;
    } else if (num >= 40) {
      romans.push('XL');
      num -= 40;
    } else if (num >= 10) {
      romans.push('X');
      num -= 10;
    } else if (num >= 9) {
      romans.push('IX');
      num -= 9;
    } else if (num >= 5) {
      romans.push('V');
      num -= 5;
    } else if (num >= 4) {
      romans.push('IV');
      num -= 4;
    } else if (num >= 1) {
      romans.push('I');
      num -= 1;
    }
  }
  return romans.join('');
}

console.log(convertToRoman(44));