const homeCircle = document.getElementById('home-circle')
const projectCircle = document.getElementById('project-circle')
const aboutCircle = document.getElementById('about-circle')
const skillsCircle = document.getElementById('skills-circle')
const contactCircle = document.getElementById('contact-circle')

const homePage = document.getElementById('home-page')
const projectPage = document.getElementById('project-page')
const aboutPage = document.getElementById('about-page')
const skillsPage = document.getElementById('skills-page')
const contactPage = document.getElementById('contact-page')

const navCircles = document.querySelectorAll(".fa-dot-circle")

homeCircle.classList.add("active")

document.addEventListener('scroll', () => {
    if (self.pageYOffset < projectPage.offsetTop-300) {
        homeCircle.classList.add("active")
        projectCircle.classList.remove("active")
    } else if (self.pageYOffset < aboutPage.offsetTop-300 && self.pageYOffset >= projectPage.offsetTop-300) {
        homeCircle.classList.remove("active")
        projectCircle.classList.add("active")
        aboutCircle.classList.remove("active")
    } else if (self.pageYOffset < skillsPage.offsetTop-300 && self.pageYOffset >= aboutPage.offsetTop-300) {
        projectCircle.classList.remove("active")
        aboutCircle.classList.add("active")
        skillsCircle.classList.remove("active")
    } else if (self.pageYOffset < contactPage.offsetTop-300 && self.pageYOffset >= skillsPage.offsetTop-300) {
        aboutCircle.classList.remove("active")
        skillsCircle.classList.add("active")
        contactCircle.classList.remove("active")
    } else {
        skillsCircle.classList.remove("active")
        contactCircle.classList.add("active")
    }
})