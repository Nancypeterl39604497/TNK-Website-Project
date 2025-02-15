$(document).ready(function () {
  // Toggle the mobile menu
  $("#menuToggle").click(function () {
    $("#navMenu").toggleClass("active");
  });

  // Open the search overlay
  $(".search-btn").click(function () {
    $(".wrapper").addClass("active"); // Show the overlay
    $(this).hide(); // Hide the search button
    $(".search-data").fadeIn(500); // Show the search data
    $(".close-btn").fadeIn(500); // Show the close button
    $(".search-data .line").addClass("active"); // Activate the line
  });

  // Close the search overlay
  $(".close-btn").click(function () {
    $(".wrapper").removeClass("active"); // Hide the overlay
    $(".search-btn").fadeIn(800); // Show the search button
    $(".search-data").fadeOut(500); // Hide the search data
    $(".close-btn").fadeOut(500); // Hide the close button
    $(".search-data .line").removeClass("active"); // Deactivate the line
    $("input").val(""); // Clear the search input
  });

  // Back-to-top functionality
  const backToTopBtn = $("#backToTopBtn");

  // Show/hide the button based on scroll position
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      backToTopBtn.fadeIn(500); // Show button
    } else {
      backToTopBtn.fadeOut(500); // Hide button
    }
  });

  // Smooth scroll to the top when button is clicked
  backToTopBtn.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500); // Scroll to top
  });
});

// Theme toggle functionality
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// Check localStorage for saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Light Mode";
}

if (toggleButton) {
  toggleButton.textContent = body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}


// Toggle dark mode and save preference in localStorage
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      toggleButton.textContent = "☀️ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      toggleButton.textContent = "🌙 Dark Mode";
    }
  });
}


// Search functionality
const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");

// Add a click event listener to the search button
searchButton.addEventListener("click", function (event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Retrieve the search query
  const searchQuery = searchBar.value.trim();
  console.log("Search query:", searchQuery);

  // Example: Implement custom search functionality here
  // Filter results or send the query to the server via AJAX
});
if (searchButton && searchBar) {
  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const searchQuery = searchBar.value.trim();
    console.log("Search query:", searchQuery);
  });
}
