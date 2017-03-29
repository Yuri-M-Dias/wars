function extractOperands(poly) {
  const polyString = String(poly);
  const expression = /([+-]?[0-9]*[a-z]+)/gi;
  let matches = [];
  let match;
  while (match = expression.exec(polyString)) {
    let currentMatch = match[1];
    matches.push(currentMatch);
  }
  if(!matches || matches.length < 0) {
    return null;
  }
  // Just logging it for debug
  for (let i = 0, len = matches.length; i < len; i++) {
    console.log([`${i}`, matches[i]]);
  }
  return matches;
}

function simplify(poly){
  const operands = extractOperands(poly);
  if(!operands || operands.length < 1) {
    return null;
  }
  let resultArray = operands;
  const getParts = /([+-]?)([0-9]*)([a-z]+)/gi;
  resultArray.sort((a,b) => {
    const aLetters = getParts.exec(a);
    const bLetters = getParts.exec(b);
    console.log(`${a}=${aLetters[1]} ${b}=${bLetters[1]}`);
  });
  const result = resultArray.join("");
  return result;
}
