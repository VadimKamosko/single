let btn = document.querySelector('#btn');
let form = document.querySelector('.form-input');


btn.addEventListener('click', () => {
    if (form.value) {
        if (isValid(form.value)) {
            form.classList.remove('error');
            form.value="";
        }
        else {
            form.classList.add('error');
        }

    }
    else {
        form.classList.add('error');
    }
})


function isValid(str) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(str);
}

form.addEventListener('focus',()=>{
    form.classList.remove('error');
    form.classList.remove('success');
})

form.addEventListener('blur',()=>{
    if (form.value) {
        if (isValid(form.value)) {
            form.classList.remove('error');
            form.classList.add('success');
        }
        else {
            form.classList.add('error');
        }

    }
    else {
        form.classList.add('error');
    }
})