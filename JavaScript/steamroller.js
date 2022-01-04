function steamrollArray(arr) {
  const goDownArray = (downArray, backArray) => {
    downArray.forEach(el => {
    if (Array.isArray(el)) {
      goDownArray(el, backArray);
    } else {
      backArray.push(el);
    }
  });
  }
  let newArr = [];
  goDownArray(arr, newArr);
  
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));