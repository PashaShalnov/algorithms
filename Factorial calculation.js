function factorialize(num) {
  let temp = [];
  let fact = 1

     for (let i=1; i<=num; i++) {
     temp = [i]
     fact *= temp
}
  num = fact
  return num;
}
factorialize(5);

// **********************
// If we need to insert this function to DOM

function factCompute() {
   var inpElement = document.getElementById ('num') 
   var num = parseInt(inpElemen.value);
   inpElement.value = null;
   var result = 1

   if (num < 0) result = "neagative number"
   else if (num === 0) result = 1 
   else {
      result = num;
}
        for (var i=1; i<num; i++) { 
            result = result * i;
        }  
    document.getElementById('answer').innerText = result;    
}
