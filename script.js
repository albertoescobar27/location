document.addEventListener("DOMContentLoaded", () => {
    // Display current date and time
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const locationElement = document.getElementById("location");

    function updateDateTime() {
        const now = new Date();
        dateElement.textContent = `Date: ${now.toLocaleDateString()}`;
        timeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
    }

    async function fetchLocation() {
        try {
            const response = await fetch("https://ipapi.co/json/");
            if (response.ok) {
                const data = await response.json();
                locationElement.textContent = `Location: ${data.city}, ${data.region}, ${data.country_name}`;
            } else {
                locationElement.textContent = "Location: Unable to fetch location.";
            }
        } catch (error) {
            locationElement.textContent = "Location: Error fetching location.";
        }
    }

    // Update time every second
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Fetch and display location
    fetchLocation();
});
