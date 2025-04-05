// // Smooth scrolling for all navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if(targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if(targetElement) {
//             if ('scrollBehavior' in document.documentElement.style) {
//                 // Smooth scrolling supported
//                 targetElement.scrollIntoView({ behavior: 'smooth' });
//             } else {
//                 // Fallback for older browsers
//                 window.scrollTo({
//                     top: targetElement.offsetTop,
//                     behavior: 'smooth'
//                 });
//             }
            
//             // Close sidebar if it's open (for mobile)
//             sideBar.classList.remove("open-sidebar");
//             sideBar.classList.add("close-sidebar");
//         }
//     });
// });


// function scrollToContact() {
//     const contactSection = document.getElementById('contact');
//     if (contactSection) {
//         if ('scrollBehavior' in document.documentElement.style) {
//             // Smooth scrolling supported
//             contactSection.scrollIntoView({ behavior: 'smooth' });
//         } else {
//             // Fallback for older browsers
//             window.scrollTo({
//                 top: contactSection.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
        
//         // Close sidebar if it's open (for mobile)
//         const sideBar = document.querySelector('.sidebar');
//         if (sideBar) {
//             sideBar.classList.remove("open-sidebar");
//             sideBar.classList.add("close-sidebar");
//         }
//     }
// }



// function scrollToContact() {
//      const contactSection = document.getElementById('contact');
//      if ('scrollBehavior' in document.documentElement.style) {
//          // Smooth scrolling supported
//          contactSection.scrollIntoView({ behavior: 'smooth' });
//      } else {
//          // Fallback for older browsers
//          window.scrollTo({
//              top: contactSection.offsetTop,
//              behavior: 'smooth'
//          });
//      }
//  }



// const video1 = document.getElementById('projectVideo1');
// const video2 = document.getElementById('projectVideo2');
// const video3 = document.getElementById('projectVideo3');
// const hoverSign = document.querySelector(".hover-sign");

// //sidebar elements //

// const sideBar = document.querySelector('.sidebar');
// const menu = document.querySelector('.menu-icon');
// const close = document.querySelector('.close-icon');


// const videoList = [video1, video2, video3];

// videoList.forEach(function(video){
//     video.addEventListener('mouseover',function(){
//          video.play();
//          hoverSign.classList.add("active")
//     })
//     // when mouse leave the video card it should stop playing
//     video.addEventListener('mouseout',function(){
//            video.pause()
//            hoverSign.classList.remove("active")
//         })
// })


// //sidebar elements //
// menu.addEventListener("click",function(){
//      sideBar.classList.remove("close-sidebar")
//      sideBar.classList.add("open-sidebar")
// })

// close.addEventListener("click", function(){
//      sideBar.classList.remove("open-sidebar")
//      sideBar.classList.add("close-sidebar")
// })

// document.getElementById('contactForm').addEventListener('submit', function(e) {
//      // You can add validation here
//      const email = this.querySelector('[name="email"]').value;
//      if (!email.includes('@')) {
//          e.preventDefault();
//          alert('Please enter a valid email address');
//      }
//  });



// DOM Elements
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const hoverSign = document.querySelector(".hover-sign");
const videos = [document.getElementById('projectVideo1'), 
                document.getElementById('projectVideo2'), 
                document.getElementById('projectVideo3')];

// Smooth scrolling function (reusable)
const smoothScroll = (targetId, closeSidebar = true) => {
    const target = document.querySelector(targetId);
    if (!target) return;
    
    target.scrollIntoView({ behavior: 'smooth' });
    if (closeSidebar && sideBar) {
        sideBar.classList.toggle("open-sidebar", false);
        sideBar.classList.toggle("close-sidebar", true);
    }
};

// Navigation and contact scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId !== '#') smoothScroll(targetId);
    });
});

const scrollToContact = () => smoothScroll('#contact');

// Video hover effects
videos.forEach(video => {
    if (!video) return;
    video.addEventListener('mouseover', () => {
        video.play();
        if (hoverSign) hoverSign.classList.add("active");
    });
    video.addEventListener('mouseout', () => {
        video.pause();
        if (hoverSign) hoverSign.classList.remove("active");
    });
});

// Sidebar toggle
menu?.addEventListener("click", () => sideBar.classList.toggle("open-sidebar", true));
close?.addEventListener("click", () => sideBar.classList.toggle("open-sidebar", false));

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    if (!this.querySelector('[name="email"]').value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address');
    }
});