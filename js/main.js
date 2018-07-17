// the function which handles the input field logic
function getName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
           
    if (nameField.length < 2) {
        result.textContent = 'Name must contain at least 2 characters';
		return;
        //alert('name must contain at least 2 characters');
    } else {
        result.textContent = 'Gender of name ' + nameField +' is:';
		//alert(nameField);
    }
    //AJAX - Server Response, 4: request finished and response is ready, 200: "OK"
      var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)  {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("gender").innerHTML = myObj.gender;
    }
};
xmlhttp.open("GET", "https://api.genderize.io/?name=peter" + nameField);
xmlhttp.send();  
    
}
// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getName);
