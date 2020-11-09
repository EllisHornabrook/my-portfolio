"use strict";

var homeCircle = document.getElementById('home-circle');
var projectCircle = document.getElementById('project-circle');
var aboutCircle = document.getElementById('about-circle');
var skillsCircle = document.getElementById('skills-circle');
var contactCircle = document.getElementById('contact-circle');
var homePage = document.getElementById('home-page');
var projectPage = document.getElementById('project-page');
var aboutPage = document.getElementById('about-page');
var skillsPage = document.getElementById('skills-page');
var contactPage = document.getElementById('contact-page');
var navCircles = document.querySelectorAll(".fa-dot-circle");
homeCircle.classList.add("active");
document.addEventListener('scroll', function () {
  if (self.pageYOffset < projectPage.offsetTop - 300) {
    homeCircle.classList.add("active");
    projectCircle.classList.remove("active");
  } else if (self.pageYOffset < aboutPage.offsetTop - 300 && self.pageYOffset >= projectPage.offsetTop - 300) {
    homeCircle.classList.remove("active");
    projectCircle.classList.add("active");
    aboutCircle.classList.remove("active");
  } else if (self.pageYOffset < skillsPage.offsetTop - 300 && self.pageYOffset >= aboutPage.offsetTop - 300) {
    projectCircle.classList.remove("active");
    aboutCircle.classList.add("active");
    skillsCircle.classList.remove("active");
  } else if (self.pageYOffset < contactPage.offsetTop - 300 && self.pageYOffset >= skillsPage.offsetTop - 300) {
    aboutCircle.classList.remove("active");
    skillsCircle.classList.add("active");
    contactCircle.classList.remove("active");
  } else {
    skillsCircle.classList.remove("active");
    contactCircle.classList.add("active");
  }
});