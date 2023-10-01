//////// Function to change navbar backgroung colour the background colour of the div in view ///////////

// Get references to the navigation bar and all fullscreen divs
const navbar = document.getElementById('my-nav');

const fullscreenDivs = [
    document.getElementById('intro'),
    document.getElementById('about'),
    document.getElementById('skills'),
    document.getElementById('projects'),
    document.getElementById('contact')
];

// Function to update the navbar color based on scroll position
function updateNavbarColor() {

    const scrollPosition = window.scrollY;

    // Iterate through each fullscreen div
    fullscreenDivs.forEach((div, index) => {

        const divPosition = div.getBoundingClientRect().top;

        // Define the scroll threshold for each div (adjust as needed)
        const scrollThreshold = 50; // Adjust this value as needed

        // Check if the fullscreen div is at or near the top of the page
        if (divPosition <= scrollThreshold) {

            // Apply a unique color to the navigation bar based on the div's index
            const colors = ['transparent', '#f4f4f3', '#ffc700', '#f4f4f3', '#ffc700']; // Define your colors
            navbar.style.backgroundColor = colors[index];
        }

    });

}

// Attach the scroll event listener
window.addEventListener('scroll', updateNavbarColor);

// Call the function initially to set the initial color
updateNavbarColor();



/////////// Function to change the navbar from white to black when moving out of the into page //////////

function setNavbarLinkColor(visibilityThreshold) {
    const introDiv = document.getElementById('intro');
    const navbarLinks = document.querySelectorAll('#my-nav li a');

    const observer = new IntersectionObserver(entries => {
        const introIsInView = entries[0].intersectionRatio >= visibilityThreshold;

        navbarLinks.forEach(link => {
            link.style.color = introIsInView ? 'white' : '#242424';
        });
    }, {
        threshold: visibilityThreshold  // Observe based on the provided visibility threshold
    });

    // Observe the intro div to check if it's in view
    observer.observe(introDiv);
}

// Call the function with a visibility threshold of 0.5 (50% visibility)
setNavbarLinkColor(0.1);






