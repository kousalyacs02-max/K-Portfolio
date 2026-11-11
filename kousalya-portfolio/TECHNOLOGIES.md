# Technologies Used - Kousalya C S Portfolio

## 1. Overview
A responsive, static personal portfolio website. It has no backend, no build step and no framework, so it opens straight from the folder and can be hosted anywhere for free.

## 2. Technology stack
| Layer | Technology | Used for |
|---|---|---|
| Structure | HTML5 (semantic tags: header, nav, main, section, article, figure, footer) | Page content, accessibility, SEO |
| Styling | CSS3 (custom properties, Grid, Flexbox, media queries, sticky header, transforms) | Colour theme, layout, responsive design, hover states |
| Behaviour | Vanilla JavaScript (ES6) | Mobile menu, active-section highlight (IntersectionObserver), photo reveal, auto footer year |
| Fonts | Google Fonts: Fraunces (headings) and Inter (body) | Typography, with Georgia / system-ui fallbacks |
| Icons | Inline SVG and Unicode symbols | GitHub, LeetCode and hobby icons, no icon library needed |
| Images | JPEG, cropped and compressed with Python Pillow | Portrait, dance photo, crochet photo |

## 3. Project structure
```
kousalya-portfolio/
  index.html          page markup
  css/style.css       all styling
  js/main.js          all scripts
  images/             kousalya.jpg, dance.jpg, crochet.jpg
  TECHNOLOGIES.md     this document
  README.md           run and publish guide
```

## 4. Key features
- Fully responsive (desktop, tablet, mobile) with a collapsible menu
- Smooth scrolling and active-section highlight in the navigation
- Sections: Home, About, Education timeline, Skills, Projects, Hobbies (Music, Dance, Writing poems, Crochet), Contact
- Visible keyboard focus, alt text on images, reduced-motion support
- Links to GitHub, LeetCode and email

## 5. Tools for development and publishing
VS Code, Live Server extension, Git and GitHub, GitHub Pages or Netlify (free hosting).
