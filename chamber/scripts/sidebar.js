document.addEventListener("DOMContentLoaded", function() {
    // Retrieve last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");
  
    // Get current date
    var currentDate = new Date().getTime();
  
    // If this is the user's first visit
    if (!lastVisit) {
      document.querySelector(".sidebar h2").textContent = "Welcome! Let us know if you have any questions.";
    } else {
      // Calculate time difference between visits
      var timeDiff = currentDate - lastVisit;
      var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
      // Update sidebar message based on time difference
      if (diffDays === 0) {
        document.querySelector(".sidebar h2").textContent = "Back so soon! Awesome!";
      } else {
        var message = (diffDays === 1) ? "day" : "days";
        document.querySelector(".sidebar h2").textContent = "You last visited " + diffDays + " " + message + " ago.";
      }
    }
  
    // Store current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);
  });
  