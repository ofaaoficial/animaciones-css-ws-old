document.addEventListener('scroll',()=>{
    let posY = 150;
    if(window.scrollY < 174) {
        document.querySelector('.parallax header h1').style.transform = `translate(50%, ${posY + window.scrollY}%)`;
        document.querySelector('.parallax header img').style.transform = `translateY(${-window.scrollY}px)`;
    }
});