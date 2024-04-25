const sideMenu = document.querySelector('aside');
const sideMenuC = document.querySelector('#aside_close')
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');

const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = "block"
})
closeBtn.addEventListener('click',()=>{
    sideMenuC.style.display = "none"
})

themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1) ').classList.toogle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toogle('active')
})