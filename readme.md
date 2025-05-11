# Nervult Nexus (Static HTML/CSS/JS Version)

This is a static HTML, CSS, and JavaScript version of the Nervult Nexus website.

## Running the website

Since this is a static website, you can open the `.html` files directly in your browser.
Alternatively, you can use a simple HTTP server to serve the files. For example:

- Using `live-server` (if you have Node.js and npm installed):
  ```bash
  npx live-server .
  ```
- Using Python's built-in HTTP server:
  ```bash
  python -m http.server
  ```
  (For Python 2, use `python -m SimpleHTTPServer`)

Then open your browser and navigate to the address provided by the server (usually `http://localhost:8000` or `http://localhost:3000`).

## Structure

- `*.html`: HTML files for each page (e.g., `index.html`, `about.html`).
- `css/style.css`: Contains all the styles for the website.
- `js/data.js`: Stores data like navigation items, project details, etc.
- `js/script.js`: Contains JavaScript for dynamic functionalities like mobile menu, rendering content, etc.
- `assets/`: Contains any static assets like images or icons (if any). Images are currently linked from picsum.photos.