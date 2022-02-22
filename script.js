let btnprimary = document.querySelector('#primary');
let btndanger = document.querySelector('#danger');
let btnsuccess = document.querySelector('#success');
console.log(btnprimary);
console.log(btndanger);
console.log(btnsuccess);
btnprimary.addEventListener('click', () => {
    console.log('clicked primary : ' + document.querySelector('#primary').style.backgroundColor);
    if (!btnprimary.style.backgroundColor || btnprimary.style.backgroundColor == 'grey') {
        btnprimary.style.backgroundColor = '#333ab7'
    } else {
        btnprimary.style.backgroundColor = 'grey'
    }
});
btndanger.addEventListener('click', () => {
    console.log('clicked danger : ' + document.querySelector('#danger').style.backgroundColor);
    if (!btndanger.style.backgroundColor || btndanger.style.backgroundColor == 'yellow') {
        btndanger.style.backgroundColor = '#c9302c';
        btndanger.style.color = 'white'
    } else {
        btndanger.style.backgroundColor = 'yellow';
        btndanger.style.color = 'red'
    }
});
btnsuccess.addEventListener('click', () => {
    console.log('clicked success : ' + document.querySelector('#success').style.backgroundColor);
    if (!btnsuccess.style.backgroundColor || btnsuccess.style.backgroundColor == 'pink') {
        btnsuccess.style.backgroundColor = '#4cae4c'
    } else {
        btnsuccess.style.backgroundColor = 'pink'
    }
});
// console.log(btnprimary);
// console.log(btndanger);
// console.log(btnsuccess);
