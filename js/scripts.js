$(document).ready(function(){
 $('#form').submit(function(event){
    event.preventDefault();
    var inputString = $("#string1").val();
    var vowels = ["a","e","i","o","u"];
    var newString = ""; //new array to hold stings temporarily
    var index = 0;
    var stringCharacter = inputString.split("");
    for (var index=0; index < inputString.length; index += 1) {
//      var stringCharacter = inputString[index];
      alert("value of stringCharacter: " + stringCharacter);
      if (vowels.indexOf(inputString) > 1) {
        newString = newString + "-";
        alert("value of indexOf: " + vowels.indexOf(stringCharacter));
      } else {
        newString = newString+stringCharacter[index];
        alert("Else-newString value: " + newString);
      }
    }
  });
});
