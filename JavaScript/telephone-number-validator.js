function telephoneCheck(str) {

  function checkBrackets() {
    if (str.includes('(')) {
      isOK = false;
      if (str.includes(')')) {
        isOK = true;
      }
    }

    if (str.includes(')')) {
      isOK = false;
      if (str.includes('(')) {
        isOK = true;
      }
    }
  }

  let regex1 = /^\d{10}$/;
  let regex2 = /^1 \d{10}$/;
  let regex3 = /^\W*\d{3}\W*\d{3}\W\d{4}$/;
  let regex4 = /^1\W+\d{3}\W+\d{3}\W\d{4}$/;

  let isOK = false;

  if (regex1.test(str)) {
    isOK = true;
    checkBrackets();
  } else if (regex2.test(str)) {
    isOK = true;
    checkBrackets();
  } else if (regex3.test(str)) {
    isOK = true;
    checkBrackets();
  } else if (regex4.test(str)) {
    isOK = true;
    checkBrackets();
  }  

  return isOK;
}

console.log(telephoneCheck("(6054756961)"));