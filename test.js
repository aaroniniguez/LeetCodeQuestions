var compareVersion = function(version1, version2) {
  //replace all mutiple zeros with 1 zero? nnahh

    var arrVersion1 = version1.split(".");
    var arrVersion2 = version2.split(".");
    for(var i =0; i < arrVersion1.length; i ++) {
      var actualValue1 = "";
      var firstNonZeroVal = false;
      for(var p = 0 ; p < arrVersion1[i].length; p ++) {
          if(arrVersion1[i][p] === "0" && firstNonZeroVal === false) {
            actualValue1 = "0";
            continue
          }
          else if(arrVersion1[i][p] !== "0" && firstNonZeroVal === false){
            actualValue1 = arrVersion1[i][p];
            firstNonZeroVal = true;
          }


      }
    }
}