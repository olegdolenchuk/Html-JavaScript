let flag = false;
let itemElement = document.querySelectorAll('.b--item__content');
let btnControls = document.querySelector('.w--controls__fixed');

function disable (){
    if(document.querySelector('.b--item__title.show')){
        document.querySelector('.b--item__title.show').classList.remove('show');
    }
}

function initialize(item){
    let cordinatElem = item.getBoundingClientRect().top;
    if(cordinatElem < 0){
        disable();
        item.querySelector('.b--item__title').classList.add('show');
    }
}

btnControls.addEventListener('click', function(e){
    if(e.target.classList.contains('js-initialize')){
        flag = true;
        itemElement.forEach( item => {
            initialize(item);
        });
    }
    if(e.target.classList.contains('js-disable')){
        flag = false;
        disable();
    }
});

window.addEventListener('scroll', function(){
    if(flag){
        itemElement.forEach( item => {
            initialize(item);
        });
    }
});