
var typed = new Typed('#element', {
    strings: ['HTML', 'CSS', 'javaScript', 'Bootstrap','Tailwind CSS','Materail UI','Reactjs','MongoDB'],
    typeSpeed: 130,
    backSpeed: 130,
    loop: true
  });


let humBurger = document.querySelector('#humBurger');
let nav = document.getElementsByTagName('nav')

console.log(nav)

humBurger.addEventListener('click', () =>{
  nav.classList.toggle('active');
})


