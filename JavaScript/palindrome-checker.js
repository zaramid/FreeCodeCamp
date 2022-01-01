function palindrome(str) {
  const newArr = str
    .match(/([A-Za-z0-9])+/g)
    .join('').toLowerCase().split('');

  for (let i = 0; i <= Math.floor(newArr.length / 2); i++) {
    if (newArr[i] !== newArr[newArr.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("My age is 0, 0 si ega ym."));