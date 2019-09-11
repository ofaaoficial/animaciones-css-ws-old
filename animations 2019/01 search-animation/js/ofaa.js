const $SEARCH = document.querySelectorAll('.search')[0];
const $CLOSE = document.querySelectorAll('.search-close')[0];
const $INPUT = document.querySelector('.search input');

let add = true;

$SEARCH.addEventListener('click', function(){
    if(!add) return ;
    this.classList.add('search-focus')
    document.querySelector('.search .search-close').style.display = 'block';
});

$INPUT.addEventListener('keyup', function(){
    if(!this.value){
        document.querySelector('.search .search-send').style.display = 'none';
        document.querySelector('.search .search-close').style.display = 'block';
        $SEARCH.classList.remove('search-sendb')
    }else{
        document.querySelector('.search .search-send').style.display = 'block';
        document.querySelector('.search .search-close').style.display = 'none';
        $SEARCH.classList.add('search-sendb')
    }
});

$CLOSE.addEventListener('click', function(){
    add = false;
    this.parentNode.classList.remove('search-focus');
    document.querySelector('.search .search-close').style.display = 'none';
    setTimeout(()=>{ add = true; }, 500);
})
