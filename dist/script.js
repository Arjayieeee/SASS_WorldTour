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
        
        song.querySelector(".content__down").classList.toggle("open");
        song.querySelector("i").classList.toggle("open");

    })
});


var slider = tns({
    container: '.banner__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    axis: "vertical"
  });



  const starNav = document.querySelectorAll(".tab__link");
const starContent = document.querySelectorAll(".tablink__content");
starNav.forEach((star) => {
    star.addEventListener("click", () =>{
        removeActiveStar();
        star.classList.add("active");
        const activeContent= document.querySelector(`#${star.id}-content`);
        removeActiveContent();
        activeContent.classList.add("active");
    })
})

function removeActiveStar(){
    starNav.forEach((star) => {
        star.classList.remove("active")
    })
}
function removeActiveContent(){
    starContent.forEach((star) => {
        star.classList.remove("active")
    })
}