// Function to handle photo upload
function handleFileSelect(event) {
    const files = event.target.files;
    const gallery = document.getElementById('uploadedPhotos');

    gallery.innerHTML = ''; // Clear existing photos

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.alt = file.name;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

// Update current year in the footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add event listener for file input change
document.getElementById('uploadInput').addEventListener('change', handleFileSelect);

// Add event listener for delete button
document.getElementById('delete-btn').addEventListener('click', function() {
    const selectedPhotos = document.querySelectorAll('.photos-container img');
    selectedPhotos.forEach(photo => photo.remove());
});


// Function to display Indian time, date, year, and month
function displayIndianTime() {
    const currentDate = new Date();
    const indianTime = currentDate.toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
    const [date, time] = indianTime.split(',');
    const [month, day, year] = date.split('/');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedTime = `Indian Time: ${time}\nDate: ${day} ${monthNames[parseInt(month) - 1]}, ${year}`;
    document.getElementById('indian-time').textContent = formattedTime;
    document.getElementById('indian-time').style.opacity = 1; // Show Indian time with transition effect
}

// Update Indian time every second
setInterval(displayIndianTime, 1000);

// Function to toggle home content visibility
function toggleHomeContent() {
    const homeContent = document.getElementById('homeContent');
    if (homeContent.style.display === 'none') {
        homeContent.style.display = 'block';
    } else {
        homeContent.style.display = 'none';
    }
}

// Add event listener for Home button
document.getElementById('HOME-btn').addEventListener('click', toggleHomeContent);

// Function to toggle portfolio content visibility
function toggleportfolioContent() {
    const portfolioContent = document.getElementById('portfolioContent');
    if (portfolioContent.style.display === 'none') {
        portfolioContent.style.display = 'block';
    } else {
        portfolioContent.style.display = 'none';
    }
}

// Add event listener for Portfolio button
document.getElementById('PORTFOLIO-btn').addEventListener('click', toggleportfolioContent);

// Function to toggle portfolio content visibility
function toggleblogsContent() {
    const blogsContent = document.getElementById('blogsContent');
    if (blogsContent.style.display === 'none') {
        blogsContent.style.display = 'block';
    } else {
        blogsContent.style.display = 'none';
    }
}

// Add event listener for Blogs button
document.getElementById('BLOGS-btn').addEventListener('click', toggleblogsContent);

// Function to toggle Gears content visibility
function togglegearsContent() {
    const gearsContent = document.getElementById('gearsContent');
    if (gearsContent.style.display === 'none') {
        gearsContent.style.display = 'block';
    } else {
        gearsContent.style.display = 'none';
    }
}

// Add event listener for Blogs button
document.getElementById('GEARS-btn').addEventListener('click', togglegearsContent);

// Function to toggle About content visibility
function toggleaboutContent() {
    const aboutContent = document.getElementById('aboutContent');
    if (aboutContent.style.display === 'none') {
        aboutContent.style.display = 'block';
    } else {
        aboutContent.style.display = 'none';
    }
}

// Add event listener for About button
document.getElementById('ABOUT-btn').addEventListener('click', toggleaboutContent);

// Function to toggle Contact content visibility
function togglecontactContent() {
    const contactContent = document.getElementById('contactContent');
    if (contactContent.style.display === 'none') {
        contactContent.style.display = 'block';
    } else {
        contactContent.style.display = 'none';
    }
}

// Add event listener for Contact button
document.getElementById('CONTACT-btn').addEventListener('click', togglecontactContent);
