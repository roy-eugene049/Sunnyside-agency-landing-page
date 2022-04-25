const menuBtn = document.querySelector(".menu__btn")
console.log(menuBtn)
menuBtn.addEventListener("click", ()=> {
    const navList= document.querySelector(".nav__list")
    navList.classList.toggle("hide__nav")

})