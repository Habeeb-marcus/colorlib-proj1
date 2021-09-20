const sticky = document.querySelector('.sticky');
const progress = document.querySelector('.progress');


window.onscroll = function() {scrollFunction(), showProg()};


function scrollFunction() {
  if (document.documentElement.scrollTop > 690) {
    sticky.style.display = "inline";
  } else {
   sticky.style.display = "none";
  }
}

// function showProg() {
//     if (document.documentElement.scrollTop > 800) {
//        const show = progress.classList.add(".prog-anim");
//         console.log(show);
    
// }