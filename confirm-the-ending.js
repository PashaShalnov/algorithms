function confirmEnding(str, target) {
  let tLength = target.length
  let temp = str.slice(tLength * -1, );
  return target == temp
}
confirmEnding("Bastian", "n");
