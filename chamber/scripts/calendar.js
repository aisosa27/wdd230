// Get the current date
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.toLocaleString('default', { month: 'long' }); // Full month name
const currentYear = currentDate.getFullYear();

// Set the current month text
document.getElementById('currentMonth').textContent = `${currentMonth} ${currentYear}`;

// Get the number of days in the current month
const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();

// Get the first day of the month (0 - 6, where 0 represents Sunday)
const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();

// Get the element to display the calendar
const calendar = document.getElementById('calendar');

// Generate the calendar grid
for (let i = 0; i < firstDayOfMonth; i++) {
  const emptyCell = document.createElement('div');
  emptyCell.classList.add('calendar-cell', 'empty-cell');
  calendar.appendChild(emptyCell);
}

for (let i = 1; i <= daysInMonth; i++) {
  const calendarCell = document.createElement('div');
  calendarCell.classList.add('calendar-cell');

  if (i === currentDate.getDate()) {
    calendarCell.classList.add('current-day');
  }

  calendarCell.textContent = i;
  calendar.appendChild(calendarCell);
}


