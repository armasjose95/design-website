const hamburger=getElementByID('hamburger');
const navul=getElementByID('navul');

hamburger.addEventListener('click', ()=>{
    navul.classList.toggle('show');
});