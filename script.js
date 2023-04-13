// Get the current page URL
var currentUrl = window.location.href;

// Get all menu items
var menuItems = document.getElementsByTagName('a');

// Loop through the menu items and check if their href matches the current URL
for (var i = 0; i < menuItems.length; i++) {
  if (menuItems[i].href === currentUrl) {
    // Add the "active" class to the matching menu item
    menuItems[i].className = "active";
  }
}
