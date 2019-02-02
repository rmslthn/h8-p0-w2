// 1. Menyusun Barisan Bintang

var rows1 = 5;
for(var i = 0; i<rows1; i++){
  console.log("*");
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;
for(var j = 0; j<rows2; j++){
  var line="";
  for(var k = 0; k<rows2; k++){
    line+="*";
  }
  console.log(line);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
for(var l = 0; l<1; l++){
  var line="";
  for(var m = 0; m<rows3; m++){
    line+="*"
    console.log(line);
  }
}