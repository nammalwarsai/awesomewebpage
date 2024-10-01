// Function to display the current date and time
function displayDate() {
    const dateElement = document.getElementById("date");
    const currentDate = new Date();
    dateElement.innerHTML = `Current Date and Time: ${currentDate}`;
  }
  