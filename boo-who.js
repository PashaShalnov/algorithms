function booWho(bool) {
  return typeof(bool) == "boolean";
}

booWho(true);
booWho([1, 2, 3])
booWho({ "a": 1 })
booWho(NaN)

//Check if a value is classified as a boolean primitive. Return true or false.

