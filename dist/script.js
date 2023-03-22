const togglemenu = document.querySelector(".toggle__menu");
const slide = document.querySelector(".slide");

togglemenu.addEventListener('click', () =>{
    togglemenu.classList.toggle('open');
    slide.classList.toggle('open');
} )


const dotmenu = document.querySelector(".dot__menu");
const dot_top = document.querySelector(".dot__context");

dotmenu.addEventListener('click', () =>{
    dotmenu.classList.toggle('open');
    dot_top.classList.toggle('open');
} )