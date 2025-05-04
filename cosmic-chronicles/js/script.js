document.addEventListener('DOMContentLoaded', () => {
    // Post Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            posts.forEach(post => {
                if (category === 'all' || post.getAttribute('data-category') === category) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!name || !email || !message) {
                alert('All fields are required.');
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Form submitted successfully!');
            contactForm.reset();
        });
    }
});