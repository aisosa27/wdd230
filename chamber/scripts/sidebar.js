// Function to calculate the difference between two dates in days
function daysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}

// Function to display appropriate message based on visit time
function displayVisitMessage() {
  const welcomeMessage = "Welcome! Let us know if you have any questions.";
  const backSoonMessage = "Back so soon! Awesome!";
  const localStorageKey = "lastVisitDate";
  const sidebar = document.getElementById("sidebar");
  
  // Retrieve last visit date from localStorage
  const lastVisitDate = localStorage.getItem(localStorageKey);

  if (!lastVisitDate) {
    sidebar.textContent = welcomeMessage;
  } else {
    const today = new Date();
    const daysSinceLastVisit = daysBetweenDates(today, new Date(lastVisitDate));

    if (daysSinceLastVisit < 1) {
      sidebar.textContent = backSoonMessage;
    } else {
      const daysMessage = daysSinceLastVisit === 1 ? "day" : "days";
      sidebar.textContent = "You last visited " + daysSinceLastVisit + " " + daysMessage + " ago.";
    }
  }

  // Store current visit date in localStorage
  localStorage.setItem(localStorageKey, new Date().toISOString());
}

// Call function to display message when the page loads
displayVisitMessage();
