const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);


const pContent = document.createElement('p');
pContent.style.color = 'red'; 
pContent.classList.add('pContent');
pContent.textContent = 'Hey, I\'m red';
container.appendChild(pContent);

const h3Content = document.createElement('h3');
h3Content.style.color = 'blue';
h3Content.classList.add('h3Content');
h3Content.textContent = 'I’m a blue h3!';
container.appendChild(h3Content);

const divContent = document.createElement('div');
divContent.style.borderColor = 'black';
divContent.style.borderWidth = '5px';
divContent.style.borderStyle = 'solid';
divContent.classList.add('divContent');
container.appendChild(divContent);

const container2 = document.querySelector('.divContent');

const h1Content = document.createElement('h1');
h1Content.classList.add('h1Content');
h1Content.textContent = 'I am a div';
container2.appendChild(h1Content);

const pMeToo = document.createElement('p');
pMeToo.classList.add('pMeToo');
pMeToo.textContent = 'ME TOO';
container2.appendChild(pMeToo);

const button = document.querySelector('#btn');
// button.onclick = () => alert('Hello');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', () => {
    alert('Clicked button 2');
});