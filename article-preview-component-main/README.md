# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Article preview component solution](#frontend-mentor---article-preview-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)

## Overview

![Desktop mode preview](design\desktop-active-state.jpg)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

- How to resize and position an image into a container using CSS

```css
.drawers {
  border-radius: 10px 0 0 10px;
  width: 285px;
  height: 280px;
  object-fit: cover;
  object-position: 0% 100%;
}
```

- How to use Javascript to manipulate the CSS of two elements using one function

```js
let shareButton = document.querySelector(".share-container");
function contactLinks() {
  shareButton.classList.toggle("active");
  document.querySelector("main").classList.toggle("active");
}
```

```css
.share-container.active {
  display: flex;
}
main.active {
  height: 500px;
}
```

### Continued development

- To build webpages with Javascript

## Author

- Github - [Aishat02](https://github.com/Aishat02)
- Frontend Mentor - [Aris](https://www.frontendmentor.io/profile/Aishat02)
- Twitter - [aishat_tijani](https://www.x.com/aishat__tijani)
