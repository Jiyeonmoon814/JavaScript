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
    document.querySelector('body').classList.add('bd-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML='<h1>Hello</h1>'
});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const eamilInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value===''||eamilInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Please enver all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (nameInput.value() + ':' + eamilInput.value()));

        userList.appendChild(li);

        //Clear fields
        nameInput.value='';
        eamilInput.value='';
    }
}