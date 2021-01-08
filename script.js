let back = document.querySelector('.back');
let next = document.querySelector('.next');
let allPictires = document.querySelectorAll('.picture');
let pagEnd = document.querySelector('#endcounter');
let pagStart = document.querySelector("#beginCount");
let container = document.querySelector('.container-gallery');

let counter = 1;
let maxCounter = allPictires.length;

pagEnd.innerHTML = ` ${maxCounter} `;
pagStart.innerHTML = `${counter}`

let offset = 0;

next.addEventListener('click', () => {
    if (counter + 1 <= maxCounter)
        counter++;
    else {
        offset = 437;
        counter = 1;
    }
    pagEnd.innerHTML = ` ${maxCounter} `;
    pagStart.innerHTML = `${counter}`
    offset = offset - 437;
    container.style.left = offset + 'px';
})
back.addEventListener('click', () => {
    if (counter + 1 > 2)
        counter--;
    else {
        offset = -437 * maxCounter;
        counter = maxCounter;
    }
    pagEnd.innerHTML = ` ${maxCounter} `;
    pagStart.innerHTML = `${counter}`
    offset = offset + 437;
    container.style.left = offset + 'px';
})