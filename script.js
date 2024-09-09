
var typed = new Typed('#element', {
    strings: ['HTML', 'CSS', 'javaScript', 'Bootstrap','Tailwind CSS','Materail UI','Reactjs','nodejs', 'expressjs','MongoDB'],
    typeSpeed: 130,
    backSpeed: 130,
    loop: true
  });

  const menuIcon = document.getElementById('menu-icon');
  const navMenu = document.getElementById('nav-menu');
  
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });


