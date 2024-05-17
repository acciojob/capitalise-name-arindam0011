//your JS code here. If required.
 const name= document.getElementById("fname");

name.addEventListener("blur", function() {
	name.value = name.value.toUpperCase();
})