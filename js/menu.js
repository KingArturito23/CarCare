const herramienta = document.querySelector('.herramienta');
const menu = document.querySelector('.menu-navegacion');

herramienta.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != men && e.target != herramienta ){

            menu.classList.toggle("spread")
        }
})



