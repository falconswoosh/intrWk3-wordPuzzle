$(document).ready(function() {
 $('#form').submit(function(event) {
    var inputString = $("#string1").val();
    var vowels = ["a","e","i","o","u"];
    var newString = ""; //new array to hold stings temporarily
    var stringCharacter = inputString.split("");
    for (var index=0; index < inputString.length; index += 1) {
      alert("Split string: " + stringCharacter + " | Split char: " + stringCharacter[index] + " | stringCharacterLength: " + stringCharacter.length);
//      var stringCharacter = inputString[index];
      // alert("Value of index is: " + index);
      // alert("Value of inputString-length: " + inputString.length);
      // alert("value of stringCharacter: " + stringCharacter);
      if (vowels.indexOf(stringCharacter) > -1) {
        newString = newString + "-";
        alert("If-alert");
      } else {
        newString = newString+stringCharacter[index];
      }
    }
    event.preventDefault();
  });
});
