//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
//Multiple element

const ul=document.querySelector('.items');
console.log(document.getElementsByClassName('item'));
ul.firstElementChild.textContent='Hello';

const btn = document.querySelector('.btn');
btn.style.background='red';

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
    document.querySelector('#my-form')
    .style.background = '#ccc';
});