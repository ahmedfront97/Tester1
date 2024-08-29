let iconBar = document.getElementById('icon-bar');
let navBar = document.getElementById('nav-bar');




let slides = document.querySelectorAll('.slide');

iconBar.onclick = function(){
    navBar.classList.toggle('show-nav');
}


let counter = 1;
function slideShow(par){
    for(let i = 0 ; i < slides.length ; i++){
        slides[i].style.opacity='0';
    }
    if(counter > slides.length){counter = 1}
    if(counter < 1){counter = slides.length}
    slides[counter - 1].style.opacity = '1';
    
}
slideShow(counter);
