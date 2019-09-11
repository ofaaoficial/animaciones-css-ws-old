const el = e => document.querySelector(e);

const writingAnimation = el =>{

    let time = el.getAttribute('data-time') || 700;

    let arr = [];

    for(let p of el.childNodes ){
        if(p.tagName == `SPAN`) arr.push(p.innerText);
    }

    el.innerHTML = '';

    for (let i in arr){
        setTimeout(()=>{

            writter(el, arr[i].split(''), time);

            if(i < arr.length - 1){
                setTimeout(()=>{
                    eraser(el);
                }, time * arr[i].length);
            }

        }, time * arr[i].length);
    }
}

const writter  = (el, arrStr = ['n', 'o', ' ', 't', 'e', 'x', 't']) =>{
    let time = el.getAttribute('data-time') || 700;
    let positionStr = 0;
    let positionMax = arrStr.length;

    let intervalAnimationWritter = setInterval(()=>{
        positionStr < positionMax ? el.innerHTML += arrStr[positionStr] : clearInterval(intervalAnimationWritter);
        positionStr++;
    }, time);
}

const eraser = el =>{
    let lenghtStr = el.innerText.length;
    let str = el.innerText;
    let intervalAnimationEraser = setInterval(()=>{
        el.innerText = str.slice(0, lenghtStr)
        lenghtStr > 0 ? lenghtStr-- : clearInterval(intervalAnimationEraser);
    }, 100)
}

writingAnimation(el('.text-writing'));