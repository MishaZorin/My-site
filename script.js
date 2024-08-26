let modal = document.getElementById('modal')
let home = document.getElementById('home')
let modal_home = document.getElementById('modal_home')
let modal1 = document.getElementById('modal1')
let modal2 = document.getElementById('modal2')
let galery = document.getElementById('galery')
let galeryDesktop = document.getElementById('galeryDesktop')
let galery_button = document.getElementById('galery_button')
let about_us = document.getElementById('about_us')
let contacts = document.getElementById('contacts')
about_us.onclick = function () {
    modal.style.display = 'block'
    modal1.style.display = 'none'
    modal2.style.display = 'none'

}
contacts.onclick = function () {
    modal1.style.display = 'block'
    modal2.style.display = 'none'
    modal.style.display = 'none'
}
galery.onclick = function () {
    modal2.style.display = 'block'
     modal.style.display = 'none'
      modal1.style.display = 'none'
}
galery_button.onclick = function () {
    modal2.style.display = 'block'
}
galeryDesktop.onclick = function () {
    modal2.style.display = 'block'
    modal_home.style.display = 'none'
}
home.onclick = function () {
    modal_home.style.display = 'block'
}