const baseURL = "https://aisosa27.github.io/wdd230/";
const linksURL = baseURL + "/data/links.json";
async function getLinks() {
    try {
      const response = await fetch(linksURL);
      const data = await response.json();
      console.log(data); // Test the JSON result
      displayLinks(data.weeks);
    } catch (error) {
      console.error('Error fetching links data: ', error);
    }
  }
  
  getLinks(); // Call the function to fetch the links data
  function displayLinks(weeks) {
    const activitiesList = document.createElement("ul");
  
    weeks.forEach(week => {
      const weekItem = document.createElement("li");
      const weekTitle = document.createElement("strong");
      weekTitle.textContent = week.week;
      weekItem.appendChild(weekTitle);
  
      const linksList = document.createElement("ul");
      week.links.forEach(link => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = baseURL + link.url;
        anchor.textContent = link.title;
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
      });
  
      weekItem.appendChild(linksList);
      activitiesList.appendChild(weekItem);
    });
  
    const learningActivities = document.querySelector(".card:first-child");
    learningActivities.innerHTML = ""; // Clear existing static content
    learningActivities.appendChild(activitiesList);
  }
  