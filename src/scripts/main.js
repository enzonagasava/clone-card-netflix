
document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelectorAll('[data-sugest-button]')


    for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', function(){
            const content = document.getElementById('content-item')
            const svgUp = document.getElementById('svgUp')
            const svg = document.getElementById('svg')


            svgUp.classList.toggle('svgUp--click');
            svg.classList.toggle('svg--click');

            content.classList.toggle('sugest__content__item__hidden--open')


        
        })  
        
    }

    
})