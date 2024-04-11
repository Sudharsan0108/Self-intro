// Toggle Icon and Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Use classList instead of classlist
    navbar.classList.toggle('active');
};

// Scroll Sections Active Link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => { // Corrected typo: fonEach to forEach
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle Icon and Navbar When Clicked
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal().reveal('.home-content, .heading', { origin: 'top', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left', distance: '80px', duration: 2000, delay: 200 });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'right', distance: '80px', duration: 2000, delay: 200 });

// Read More Functionality
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.read-more').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.more-text').style.display = 'block';
        this.style.display = 'none';
    });
});

// Skills data
const skillsData = {
    labels: ['R Programming', 'Pentaho', 'Python','Html&Css','Javascript'],
    datasets: [{
        label: 'Skill Level',
        data: [75, 80, 75,95,75], // Update these values with your skill levels
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)', // Red color for R Programming
            'rgba(54, 162, 235, 0.6)', // Blue color for Pentaho
            'rgba(255, 206, 86, 0.6)',
            'rgba(255, 0, 0, 0.6)',
            'rgba(255, 165, 0, 0.6)',// Yellow color for Python
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1
    }]
};

// Create bar chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: skillsData,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

