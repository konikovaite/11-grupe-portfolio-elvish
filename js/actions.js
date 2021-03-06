"use strict";

// header
renderHeader( 'header', headerlinks );

const hamberger = document.querySelector('#main_header .fa-bars');
const header = document.querySelector('#main_header');

hamberger.addEventListener('click', () => {    
    header.classList.toggle('mobile-show');
;})
//-------BANDAU ISJUNGTI HEADERI KAI NUVAZIUOJU KUR NORIU
const issijungiu = document.querySelector('#main_header nav');

issijungiu.addEventListener('click', () => {    
    header.classList.remove('mobile-show');
;})
//---------------------------------------------------------
window.addEventListener('scroll', headerScroll);
headerScroll();

window.addEventListener('scroll', headerStyle);
headerStyle();

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
// education
renderEducationLeft( educationLeft );
renderEducationRight( educationRight );
// hire me

// our work
renderGallery( works );

// lightbox
const DOMgalery = document.querySelectorAll('#gallery .work .hover');
const DOMlightboxgallery = document.querySelectorAll('.lightboxgallery');
const DOMbackground = document.querySelectorAll('.background');

    for(let i=0; i<DOMgalery.length; i++){
        DOMgalery[i].addEventListener('click', () => {
            DOMlightboxgallery[i].classList.add('showw') 
        }) 
        
        DOMbackground[i].addEventListener('click', () => {
            DOMlightboxgallery[i].classList.remove('showw') 
        })  
    }
    
//     document.querySelector('#gallery .work .hover').addEventListener('click', () => {
//     document.querySelector('.lightboxgallery').classList.add('showw')   
// })

//     document.querySelector('.lightboxgallery > .background').addEventListener('click', ()=>{
//     document.querySelector('.lightboxgallery').classList.remove('showw')
// })

//     document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     if (evt.keyCode == 27) {
//         document.querySelector('.lightboxgallery').classList.remove('showw')
//     }
// };

// our clients
renderClients( clients );

// great people
renderGrpp( greatList );

// subscribe

// our blog
renderBlog( blog_data );
/* lightbox video */
document.querySelector('#blog-list .play-image').addEventListener('click', () => {
    document.querySelector('.lightbox').classList.add('show')
})

document.querySelector('.lightbox > .background').addEventListener('click', ()=>{
    document.querySelector('.lightbox').classList.remove('show')
})

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelector('.lightbox').classList.remove('show')
    }
};
/* lightbox img */
document.querySelector('#blog-list #blog-ico').addEventListener('click', () => {
    document.querySelector('.lightboxImg').classList.add('show')
})

document.querySelector('.lightboxImg > .background').addEventListener('click', ()=>{
    document.querySelector('.lightboxImg').classList.remove('show')
})

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.querySelector('.lightboxImg').classList.remove('show')
    }
};

/* slide control */
document.querySelector('#blog .fa-chevron-left').addEventListener('click', () => {
    blogSlideLeft (blog_data);
})
document.querySelector('#blog .fa-chevron-right').addEventListener('click', () => {
    blogSlideRight (blog_data);
})

// contact

// footer
window.addEventListener('scroll', footerBack);

