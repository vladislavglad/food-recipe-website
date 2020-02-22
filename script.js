
/*requests geolocation form user and stores values locally.*/
function requestGeo() {
  getLocation();

  function getLocation() {
    navigator.geolocation.getCurrentPosition(storePosition);

    function storePosition(position) {
      localStorage.setItem("userLatitude", position.coords.latitude);
      localStorage.setItem("userLongitude", position.coords.longitude);
    }
  }
}

//opens modal box.
function openModal() {
  document.getElementById('myModal').style.display = "block";

}

//closes modal box.
function closeModal() {
  document.getElementById('myModal').style.display = "none";
 
}

//does the same as previous two methods but for another ID element.
function openMod() {
  document.getElementById('myMod').style.display = "block";

}

function closeMod() {
  document.getElementById('myMod').style.display = "none";
 
}

//closes modal box when clicking outside of its box.
window.onclick = function(event) {
  if (event.target == document.getElementById('myModal') ||
       event.target == document.getElementById('myMod')) {
    document.getElementById('myModal').style.display = "none";
    document.getElementById('myMod').style.display = "none";
  }
}

//validates e-mail and passoword for the SIGN UP form.
function validate() {
  var e = document.getElementById("emailField").value;
  var x = document.getElementById("pswdField1").value;
  var y = document.getElementById("pswdField2").value;
  
  if (e == "" || e.indexOf("@") == -1) {
    alert("Please enter a valid E-mail address!");
  }
  else if (x.length < 8) {alert("Pasword must be at lest 8 symbols long!")}
  else if (x!=y) {alert("Passwords do not match. Please try again!");} 
  else if (x=="" || y=="") {alert("Password field is empty. Please try again!");}
  else {
    alert("Thank you for registering! Confirmation E-mail will be sent imidiately.");
    document.getElementById('myModal').style.display = "none";
  }
}

//Automaticaly converts user input to all Uppercase.
function toUpper() {
  var x = document.getElementById("customerHomeAddress");
  x.value = x.value.toUpperCase();
}

//Auto-tabs between input fields.
function moveCursor(fromPrevInput, toNextInput) {
  var length = document.getElementById(fromPrevInput).value.length;
  var maxLength = 4;

  if (length == maxLength) {
    document.getElementById(toNextInput).focus();
  }
}

//Disables SUBMIT button if inputs are empty or have dafault values.
function manage(txt) {
  var bt = document.getElementById("submitBtn");
  var ele = document.getElementsByClassName("cForm"); 

  for (i = 0; i < ele.length; i++) {
      if (ele[i].value == '' || ele[i].value == 0) {
          bt.disabled = true;    // Disable the button.
          return false;
      }
      else {
          bt.disabled = false;   // Enable the button.
      }
  }
}

//Opens hiden recepie form.
function openRecepieForm() {
  document.getElementById('cForm').style.display = "block";
}

//Prints submit message and hides the recepie form.
function submitMsg() {
  alert("Your recepie has been submited!");
  document.getElementById('cForm').style.display = "none";
}

//Changes text and background in one of the div's on the press of a button.
/*function changeDiv() {
  document.getElementById("divToChange").innerHTML = 
  "Press \"EDIT\" To Edit Submitted Recepie. <br><br> -OR- <br><br> Press \"NEW\" To Create Another One!";
  document.getElementById("divToChange").style.background = "rgb(179, 179, 179)";
  document.getElementById("divToChange").style.color = "white";
  document.getElementById("newBtn").innerHTML = "EDIT";
  document.getElementById("newBtn2").style.display = "block";
}*/

//Resets recepie form on button press.
function resetForm() {
  var ele = document.getElementsByClassName("cForm");
  for (i = 0; i < ele.length; i++) {
    ele[i].value = "";
  }
  document.getElementById("myRange").value = 1;
  document.getElementById("mult").value = "";
}

//Drag and drop functions follow...
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

//Allows to drop only one target.
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if (ev.target.childElementCount == 0)
    ev.target.appendChild(document.getElementById(data));
}

//Opens hidden Order Details form.
function openOrderDetails() {
  document.getElementById("chkForm").style.display = "block";
}

//Stores name in the sessionStorage.
function ssName() {
  var x = document.getElementById("customerName").value;
  sessionStorage.setItem("fname", x);
}

//Stores address in the sessionStorage.
function ssAddress() {
  var y = document.getElementById("customerHomeAddress").value;
  sessionStorage.setItem("address", y);
}

//Stores 4 last digits of credit card in the sessionStorage.
function ss4Digit() {
  var z = document.getElementById("txt4").value;
  sessionStorage.setItem("4LastDigit", z);
}

//Function that retrieves sessionStorage values to create a table.
function generateReceipt() {
 document.getElementById("nr").innerHTML = sessionStorage.getItem("fname");
 document.getElementById("har").innerHTML = sessionStorage.getItem("address");
 document.getElementById("ccr").innerHTML = "************" + sessionStorage.getItem("4LastDigit");
 document.getElementById("receiptForm").style.display = "block";
}

//Function that reviels a hidden Bing Map on the button press. 
function showMap() {
  document.getElementById("myMap").style.display = "block";
  document.getElementById("routeInfoPanel").style.display = "block";
}

//Checks for if maxLength has been reached in the <textarea> fields.
function maxLengthReached() {
  x = document.getElementById("feedback").value.length;
  if (x == 250) {alert("maximum length of 250 character has been reached!");}
}