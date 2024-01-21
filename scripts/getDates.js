// getDates.js

document.addEventListener("DOMContentLoaded", function () {
    // Copyright Year
    const copyrightYearSpan = document.getElementById("copyrightYear");
    const currentYear = new Date().getFullYear();
    copyrightYearSpan.textContent = currentYear;
  
    // Last Modified Date
    const lastModifiedParagraph = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedParagraph.textContent = "Last Modified: " + lastModifiedDate.toLocaleString();
  });
  