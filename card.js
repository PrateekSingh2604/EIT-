document.addEventListener("DOMContentLoaded", function() {
    // Get references to the content and the next button
    var content = document.getElementById("content");
    var nextButton = document.getElementById("nextButton");

    // Define an array of pages/content
    var pages = [
        "<p>This is page 1</p>",
        "<p>This is page 2</p>",
        "<p>This is page 3</p>"
    ];

    var currentPageIndex = 0; // Index of the current page

    // Function to display the current page
    function showPage() {
        content.innerHTML = pages[currentPageIndex];
    }

    // Initially display the first page
    showPage();

    // Add click event listener to the next button
    nextButton.addEventListener("click", function() {
        // Increment the currentPageIndex
        currentPageIndex++;

        // If currentPageIndex exceeds the length of pages array, reset it
        if (currentPageIndex >= pages.length) {
            currentPageIndex = 0; // You can change this behavior based on your requirements
        }

        // Display the current page
        showPage();
    });
});
