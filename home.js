const sticky = document.querySelector('.sticky');
const progress = document.querySelectorAll('.progress');
const progressSection = document.querySelector('.sect2-main');
const subBlog = document.querySelector('.sub-blog');


// TO DISPLAY HIDDEN NAVIGATION BAR
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.documentElement.scrollTop > 690) {
    sticky.style.display = "inline";
  } else {
   sticky.style.display = "none";
  }
}


function showProgress() {
  progress.forEach(progressBar => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;

    // console.log(value)
  })
}

function hiddenProgress() {
  progress.forEach(p => {
    p.style.opacity = 0;
    p.style.with = 0;
  })
}

window.addEventListener('scroll', () => {
  const sectionPos = progressSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if(sectionPos <  screenPos){
    showProgress();
    console.log('show');
  }
  else {
    hideProgress();
    console.log('hide');
  }
})

// function showProg() {
//     if (document.documentElement.scrollTop > 800) {
//        const show = progress.classList.add(".prog-anim");
//         console.log(show);
    
// }