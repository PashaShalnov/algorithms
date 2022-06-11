function destroyer(arr) {
    let tempArr = [];
    let arr2 = [];
    for (let i = 1; i < arr.length; i++) {
       tempArr.push(arguments[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (!(tempArr.includes(arr[i]))) {
          arr2.push(arr[i]);
          }
        }
    console.log("arr2 = " + arr2);
    return arr2;
}

destroyer(["tree", "hamburger", 53], "tree", 53);