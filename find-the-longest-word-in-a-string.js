function findLongestWordLength(str) {
    let strToArr = str.split(' ')
    let temp = strToArr[0]
  
    for (let i = 0; i<strToArr.length; i++) {
      if (strToArr[i].length > temp.length) {
        temp = strToArr[i]
      }
  }
  return temp.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// можно использовать split(" ") чтобы создать массивы с одтельными словам, разделив их по пробелам. Потом сравнить массивы
