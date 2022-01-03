function rot13(str) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return str.split('').map(el => {
    const elIdx = alphabet.indexOf(el);
    if (elIdx === -1) {
      return el;
    } else {
      if (elIdx + 13 < alphabet.length) {
        return alphabet[elIdx + 13];
      } else {
        return alphabet[elIdx + 13 - alphabet.length];
      }
    }
  }).join('');
}

console.log(rot13("SERR PBQR PNZC"));