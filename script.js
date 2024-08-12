function updateTime() {
    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');

    const now = new Date();

    // Format date as "Mon, 12 Aug"
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = now.toLocaleDateString('en-US', options);

    // Format time as "HH:MM:SS"
    const formattedTime = now.toLocaleTimeString('en-US', { hour6: false });

    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
