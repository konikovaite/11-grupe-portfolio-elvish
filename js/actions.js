"use strict";

// header
renderHeader( 'header', headerlinks );

const hamberger = document.querySelector('#main_header .fa-bars')
const header = document.querySelector('#main_header');

hamberger.addEventListener('click', () => {    
    header.classList.toggle('mobile-show');
;})

// window.addEventListener('scroll', headerScroll)
// hero

// about me
renderSkills( skills1 );

window.addEventListener('scroll', skillsScroll);
skillsScroll();
// services
renderServices( services );
// statistika
renderStatistics( statistics );
window.addEventListener('scroll', statisticsScroll);
statisticsScroll();
// education

// hire me

// our work

// our clients

// great people
renderGrpp( greatList );

// subscribe

// our blog
renderBlog( );
// contact

// footer

