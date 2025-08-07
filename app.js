

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


document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();

    // Form validation (optional)
    if (!this.querySelector('[name="email"]').value.includes('@')) {
        alert('Please enter a valid email address');
        return; // Stop further execution
    }

    // Form data to be sent
    const formData = new FormData(this);
    
    // Using fetch API to submit the form data to FormSubmit without page reload
    fetch(this.action, {
        method: this.method,
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            document.getElementById('formMessage').style.display = 'block';
            // Reset form fields after successful submission
            this.reset();
        } else {
            alert('There was an issue with the form submission.');
        }
    })
    .catch(error => {
        alert('There was an error submitting your message.');
    });
});
