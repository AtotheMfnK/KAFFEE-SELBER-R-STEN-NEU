let titles=documents.querySelectorAll("#accordion > h4");
function toggleContent() {
  for (let title of titles) {
    if (title!==titles) {
      title.nextElementSibling.style.display="none";
    }
  }
  const displayProperty = window.getComputedStyle(this.nextElementSibling).getPropertyValue("display");
  if(displayProperty==="none") {
      this.nextElementSibling.style.display="flex";
}  else {
    this.nextElementSibling.style.display="none";
     }
}
for (let title of titles) {
   title.addEventListener("click", toggleContent);
}