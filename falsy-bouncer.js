function bouncer(arr) {
  let falsy = [false, null, 0, "", undefined, NaN]
  let arr2 = []
  
  for (let i=0; i<arr.length; i++) {
    
    if (arr[i]) {
          arr2.push(arr[i])
    }  
  }
  return arr2;
}

bouncer([7, "ate", "", false, 9]);

/*
- Remove all falsy values from an array.
- Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
- Hint: Try converting each value to a Boolean.*/