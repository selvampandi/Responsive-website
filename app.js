let burger = document.querySelector(".burger");
let Links = document.querySelector(".nav-links");
let Textarea = document.querySelector(".textcenter")

burger.addEventListener('click',()=>{
    Links.classList.toggle("nav-show");
    Textarea.classList.toggle("textareahide");
})
