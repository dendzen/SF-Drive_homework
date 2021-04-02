import '../css/style.css';


const collButton = document.querySelectorAll('.faq__collapsible-button-team');
const icon = document.querySelectorAll('.faq__collapsible-icon-team');

//const collButton = document.querySelectorAll('.faq__collapsible-button');
//const icon = document.querySelectorAll('.faq__collapsible-icon');




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}