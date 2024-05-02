// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation (example)
const form = document.querySelector('#job-search-form');

form.addEventListener('submit', function(event) {
    const keyword = document.querySelector('#keyword').value;
    const location = document.querySelector('#location').value;

    if (!keyword || !location) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});

// Fetch job listings dynamically from an API (example)
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.example.com/joblistings')
        .then(response => response.json())
        .then(data => {
            // Handle the fetched data and display job listings dynamically
            const jobListingsContainer = document.querySelector('#job-listings');

            data.forEach(job => {
                const jobListing = document.createElement('div');
                jobListing.classList.add('job-listing');

                const title = document.createElement('h3');
                title.textContent = job.title;

                const description = document.createElement('p');
                description.textContent = job.description;

                const learnMoreLink = document.createElement('a');
                learnMoreLink.href = job.url;
                learnMoreLink.classList.add('btn');
                learnMoreLink.textContent = 'Learn More';

                jobListing.appendChild(title);
                jobListing.appendChild(description);
                jobListing.appendChild(learnMoreLink);

                jobListingsContainer.appendChild(jobListing);
            });
        })
        .catch(error => console.error('Error fetching job listings:', error));
});
