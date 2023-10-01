// zombie


function twoAppear(){
    const contentTwo = document.querySelector('.content-two');
    const twoPosition = contentTwo.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(twoPosition < screenPosition){
        contentTwo.classList.add('two-appear');
    }
};

window.addEventListener('scroll',twoAppear);



function threeAppear(){
    const contentThree = document.querySelector('.content-three');
    const threePosition = contentThree.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(threePosition < screenPosition){
        contentThree.classList.add('three-appear');
    }
}

window.addEventListener('scroll',threeAppear);