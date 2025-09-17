// Ensure jQuery is loaded before this script runs.
// The code within the `$(document).ready()` function
// will execute only when the entire HTML document is ready.
$(document).ready(function () {

  // --- Navbar Toggle Functionality ---
  // When the element with class '.fa-bars' is clicked, this function runs.
  $(".fa-bars").click(function () {
    // Toggles the 'fa-times' class on the clicked element.
    // This changes the icon from bars to a 'times' (X).
    $(this).toggleClass("fa-times");
    // Toggles the 'nav-toggle' class on the '.navbar'.
    // The CSS in 'style.css' uses this class to show or hide the navigation menu.
    $(".navbar").toggleClass("nav-toggle");
  });

  // --- Header Styling on Scroll ---
  // This event handler is triggered whenever the window is scrolled or the page is loaded.
  $(window).on("load scroll", function () {
    // Removes the 'fa-times' class from the bars icon and 'nav-toggle' from the navbar.
    // This ensures the menu is hidden and the icon is reset when the user scrolls away from the top.
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    // Checks if the user has scrolled more than 30 pixels down the page.
    if ($(window).scrollTop() > 30) {
      // If scrolled, changes the header's background to a solid color and adds a box shadow.
      $(".header").css({
        background: "#65b741",
        "box-shadow": "0 0.3rem 0.5rem rgba(0, 0, 0, 0.3)",
      });
    } else {
      // If at the top, removes the solid background and box shadow, making it transparent.
      $(".header").css({ background: "none", "box-shadow": "none" });
    }
  });

  // --- FAQ Accordion Functionality ---
  // When a '.subject-header' element is clicked, this function is executed.
  $(".subject-header").click(function () {
    // Closes all other open FAQ answers by sliding them up.
    $(".subject .subject-body").slideUp();
    // Slides down the answer corresponding to the clicked question.
    $(this).next(".subject-body").slideDown();
    // Resets the text of all '+' and '-' signs to '+'.
    $(".subject .subject-header span").text("+");
    // Changes the text of the span within the clicked header to '-'.
    $(this).children("span").text("-");
  });
});