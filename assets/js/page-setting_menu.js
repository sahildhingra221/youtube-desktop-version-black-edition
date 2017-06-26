/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunctionthis() {
    document.getElementById("psDropdown").classList.toggle("disply");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.page-setting_dropbtn')) {

    var dropdowns = document.getElementsByClassName("page-setting_dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('disply')) {
        openDropdown.classList.remove('disply');
      }
    }
  }
}