// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener('click', () => console.log('grandparent clicked'));
// parent.addEventListener('click', () => console.log('parent clicked'));
// child.addEventListener('click', () => console.log('child clicked'));
// document.addEventListener('click', () => console.log('document clicked'));

const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
    div.addEventListener('click', (e) => {
        console.log('Div clicked ' + index);
        e.stopPropagation();
        // if (e.target.matches(`div`)) {
        // }
    }, false);
});

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv);

