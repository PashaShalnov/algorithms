function rot13(str) {
  let toASC;
  let backToLetter = "";
     for (let i=0; i<str.length; i++) {
        toASC = str.charCodeAt(i);
        if (toASC > 77) {
          toASC = 64 + (13 - (90 - toASC))
        } else if (toASC >= 32 && toASC < 65 ) {
          toASC = toASC;
        } else if (toASC >= 65 && toASC <= 77) {
          toASC += 13
        };
         backToLetter += String.fromCharCode(toASC)
    } 
   return backToLetter
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")

