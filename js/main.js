// the function which handles the input field logic
function getName() {
    const nameField = document.getElementById('nameField').value;
    const result = document.getElementById('result');
           
    if (nameField.length < 2) {
        result.textContent = 'Name must contain at least 2 characters';
		return;
        //alert('name must contain at least 2 characters');
    } else {
        result.textContent = 'Gender of name ' + nameField +' is:';
		//alert(nameField);
    }
    //AJAX - Server Response, 4: request finished and response is ready, 200: "OK"
      const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)  {
        const myObj = JSON.parse(this.responseText);
        document.getElementById("gender").innerHTML = myObj.gender;
    }
};
xmlhttp.open("GET", "https://api.genderize.io/?name=" + nameField);
xmlhttp.send();  
    
}
// use an eventlistener for the event
const subButton = document.getElementById('subButton');
subButton.addEventListener('click', getName);
const nameField = document.getElementById('nameField');
nameField.addEventListener("keypress", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
   getName();
  }
});

