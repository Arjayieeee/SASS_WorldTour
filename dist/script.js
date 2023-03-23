const togglemenu = document.querySelector(".toggle__menu");
const slide = document.querySelector(".slide");

togglemenu.addEventListener('click', () =>{
    togglemenu.classList.toggle('open');
    slide.classList.toggle('open');
    dotmenu.classList.remove('open');
    dot_top.classList.remove('open');
} )


const dotmenu = document.querySelector(".dot__menu");
const dot_top = document.querySelector(".dot__context");

dotmenu.addEventListener('click', () =>{
    dotmenu.classList.toggle('open');
    dot_top.classList.toggle('open');
    togglemenu.classList.remove('open');
    slide.classList.remove('open');
} )

// const chevron = document.querySelector(".header__nav i");
// const down = document.querySelector(".content__down");

// chevron.addEventListener('click', () =>{
//     chevron.classList.toggle('open');
//     down.classList.toggle('open');
    
// } )

const chev = document.querySelectorAll(".header__nav .down")
chev.forEach((song) => {
    song.addEventListener("click", () => {
        song.nextElementSibling.classList.toggle("open");
        song.querySelector("i").classList.toggle("open");
    })
});