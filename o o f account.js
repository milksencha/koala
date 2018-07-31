function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function user() {
  var input = document.getElementById("userInput").value;
  alert(input);
}
