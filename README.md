# CSS README

## Overview
This CSS code is designed to create a layout for a web page with a header, main content area, and footer. It also includes styles for a background image, navigation menu, and various image galleries.

## Key Styles

1. **Global Styles**: The `*` selector is used to reset the margin, padding, and box-sizing of all elements on the page.

2. **Body Styles**: The `body` styles set the font size, line height, and grid layout for the page. The grid layout is defined with three rows: header, main, and footer.

3. **Header and Main Styles**: The `header` and `main` styles assign the respective grid areas.

4. **Background Image Styles**: The `.bg-img` class sets the background image, minimum height, and positioning for a full-width background.

5. **Navigation Styles**: The `#container nav` styles create a fixed, sticky navigation bar with a black semi-transparent background. The `.nav-cont` class styles the navigation links, which are initially hidden and only displayed on larger screens.

6. **Search Styles**: The `.search` class is initially hidden and only displayed on larger screens.

7. **Logo Styles**: The `.logoG` and `.logoW` classes style the logo elements in the navigation bar.

8. **Image Gallery Styles**: The `.loda` class sets up a grid layout for the image galleries, with four images in a row on larger screens. The individual image classes (`.first`, `.second`, `.therd`, `.fourth`) define the grid areas and image styles, including hover effects.

9. **Contact Form Styles**: The `.contact` class styles the contact form section, including the input fields and submit button.

10. **Footer Styles**: The `footer` styles align the footer text to the center.

## Responsive Design
The CSS code includes media queries to adjust the layout and styles for larger screens (min-width: 960px). The main changes are:

- The image gallery grid changes to a 4-column layout.
- The navigation links and search bar become visible.
- The background image size is adjusted to "cover" the entire width.
- The image sizes and hover effects are modified for better visual appearance on larger screens.

## Conclusion
This CSS code provides a solid foundation for a web page layout with a responsive design and various interactive elements, such as the navigation menu and image galleries.
