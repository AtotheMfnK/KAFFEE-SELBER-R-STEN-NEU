let titles=document.querySelectorAll("#accordion > h4");
function toggleContent() {
  for (let title of titles) {
    if (title!==this) {
      title.nextElementSibling.style.display="none";
    }
  }
  const displayProperty = window.getComputedStyle(this.nextElementSibling).getPropertyValue("display");
  if(displayProperty==="none") {
      this.nextElementSibling.style.display="block";
}  else {
    this.nextElementSibling.style.display="none";
     }
}
for (let title of titles) {
   title.addEventListener("click", toggleContent);
}