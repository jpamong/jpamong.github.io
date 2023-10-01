function coralAppear(){
    const coralContent = document.querySelector('.coral-content');
    const coralPosition = coralContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(coralPosition < screenPosition){
        coralContent.classList.add('coral-appear');
    }
};

window.addEventListener('scroll',coralAppear);



function fishAppear(){
    const fishContent = document.querySelector('.fish-content');
    const fishPosition = fishContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if(fishPosition < screenPosition){
        fishContent.classList.add('fish-appear');
    }
}

window.addEventListener('scroll',fishAppear);