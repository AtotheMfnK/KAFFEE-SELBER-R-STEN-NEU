let elModal=document.querySelector("#modal");
let elCloseButton=document.querySelector("#closeButton");
let elBigImage=document.querySelector("#bigImage");
let images=document.querySelectorAll("#gallery img");
let imageTitle=document.querySelector("#modalContent > p");

function showImage() {
    
    let srcImage=this.getAttribute("src");
    elBigImage.setAttribute("src",srcImage);

 
    elModal.style.display="flex";
}
for (let image of images) {
    image.addEventListener("click",showImage)
}
elCloseButton.addEventListener("click", function() {
    elModal.style.display="none";
})