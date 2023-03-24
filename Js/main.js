const navOpen = document.querySelector(".open")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links a")


navOpen.addEventListener("click", function(){
    navBar.style.top = "35%"
    navOpen.style.display = "none"
    navClose.style.display ="block"
})

navClose.addEventListener("click", function(){
    navBar.style.top = "-35%"
    navOpen.style.display = "block"
    navClose.style.display ="none"
})

navLinks.forEach(function (element){
    element.addEventListener ("click", function(){
        navBar.style.top = "-35%"
        navOpen.style.display = "block"
        navClose.style.display ="none"
    })
})

window.addEventListener("scroll" , function(){
    console.log(window.scrollY)
    if(window.scrollY > 480){
        document.querySelector('.backToTopArrow').style.display = "flex"
    }else{
        document.querySelector('.backToTopArrow').style.display = "none"
    }
})


document.querySelector('.backToTopArrow').addEventListener('click', function(){
    window.scrollTo(0, 0)
})