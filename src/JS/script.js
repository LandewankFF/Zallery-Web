// Create resnposive menu
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".close-menu");
const menuList = document.querySelector(".nav-menu")

menuOpen.addEventListener('click',function(){
  menuList.classList.add("active")
  menuOpen.classList.add("hide")
  menuClose.classList.add("show")
})
menuClose.addEventListener('click',function(){
  menuList.classList.remove("active")
  menuOpen.classList.remove("hide")
  menuClose.classList.remove("show")
})
