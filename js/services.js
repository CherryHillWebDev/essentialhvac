//Button clicked -> if already active, return out. 
// Otherwise, sets button active & removes active from all others
//Grab data attribute value from button
//Find div with same named ID as data attribute
//Remove active on all other divs
//Set active on that div

document.addEventListener('DOMContentLoaded', () => {
    const btnHolder = document.querySelector('.services-button-holder');
    const buttons = Array.from(btnHolder.querySelectorAll('button'));
    const allTextblocks = Array.from(document.querySelectorAll('.service-block'));

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('active')) {
                return;
            }
            const category = button.dataset.category;
            const textBlock = document.getElementById(category);
            
            const previousTextBlock = allTextblocks.find(element => element.classList.contains('active'));
            const previousButton = buttons.find(element => element.classList.contains('active'));

            previousTextBlock?.classList.remove('active');
            previousButton?.classList.remove('active');

            button.classList.add('active');
            textBlock.classList.add('active');
        })
    })
});