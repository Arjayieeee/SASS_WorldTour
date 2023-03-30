// const togglemenu = document.querySelector(".toggle__menu");
// const slide = document.querySelector(".slide");

// togglemenu.addEventListener('click', () =>{
//     togglemenu.classList.toggle('open');
//     slide.classList.toggle('open');
//     dotmenu.classList.remove('open');
//     dot_top.classList.remove('open');
// } )


// const dotmenu = document.querySelector(".dot__menu");
// const dot_top = document.querySelector(".dot__context");

// dotmenu.addEventListener('click', () =>{
//     dotmenu.classList.toggle('open');
//     dot_top.classList.toggle('open');
//     togglemenu.classList.remove('open');
//     slide.classList.remove('open');
// } )



// const chev = document.querySelectorAll(".header__nav .down")
// chev.forEach((song) => {
//     song.addEventListener("click", () => {
        
//         song.querySelector(".content__down").classList.toggle("open");
//         song.querySelector("i").classList.toggle("open");

//     })
// });

const toggle__burger = document.querySelector(".toggle__burger");
const navigation = document.querySelector(".navigation");
const toggle__dot = document.querySelector(".toggle__dot");
const time = document.querySelector(".time");
toggle__burger.addEventListener("click", () => {
toggle__burger.classList.toggle("open");
navigation.classList.toggle("open");
time.classList.remove("open");
toggle__dot.classList.remove("open");
});
  
toggle__dot.addEventListener("click", () => {
toggle__dot.classList.toggle("open");
time.classList.toggle("open");
navigation.classList.remove("open");
toggle__burger.classList.remove("open");
});
// const dropp = document.querySelectorAll(".fa-chevron-down");
// dropp.forEach((dropps) => {
//     dropps.addEventListener('click',()=>{
//         const el = dropps.parentElement.parentElement;
//         el.classList.toggle("open");
//         dropps.classList.toggle("open");
//         dropps.parentElement.parentElement.classList.toggle("active");
//     })
// })
const drop_down = document.querySelectorAll(".drop_down .li__head")
drop_down.forEach((dropd) => {
    dropd.addEventListener("click", () => {
     const content = dropd.nextElementSibling;
     const icon = dropd.querySelector("i");
     const head = dropd.parentElement;
     if (head.classList.contains("active")){
        content.classList.remove("open");
        icon.classList.remove("open");
        head.classList.remove("active");

     } else{
        yow();
        content.classList.toggle("open");
        icon.classList.toggle("open");
        head.classList.toggle("active");
     }
    });
});

const yow = () => {
    drop_down.forEach((dropd) => {
        // dropd.addEventListener("click", () => {
            // console.log(dropd.nextElementSibling)
            // dropd.nextElementSibling.classList.remove("open");
            // dropd.querySelector("i").classList.remove("open");
            // dropd.parentElement.classList.remove("active");
        // });

        // console.log(dropd)
        // const head = dropd.nextElementSibling;
        // console.log(head)

        dropd.addEventListener("click", () => {
            dropd.nextElementSibling.classList.toggle("open");
            dropd.querySelector("i").classList.toggle("open");
            dropd.parentElement.classList.toggle("active");
        }); 
    });
    // console.log(drop_down);
}







// slider
var slider = tns({
    container: '.banner__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    axis: "vertical"
  });



  const tabs = document.querySelectorAll(".tab__link");
  const tabcontent = document.querySelectorAll(".tablink__content");
  tabs.forEach((tab) => {
      tab.addEventListener("click", () =>{
          removeActivetab();
          tab.classList.add("active");
          const activeContent= document.querySelector(`#${tab.id}-content`);
          removeActiveContent();
          activeContent.classList.add("active");
      })
  })
  
  function removeActivetab(){
      tabs.forEach((tab) => {
          tab.classList.remove("active")
      })
  }
  function removeActiveContent(){
      tabcontent.forEach((tab) => {
          tab.classList.remove("active")
      })
  }
  