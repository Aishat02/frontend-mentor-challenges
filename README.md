# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- I learned about how to change/swap images in HTML & CSS using media query

```html
<img
  src="./images/image-product-desktop.jpg"
  alt="Gabrielle perfume-bottle"
  class="desktop-design"
/>
/>
<img
  src="./images/image-product-mobile.jpg"
  alt="Gabrielle perfume-bottle"
  class="mobile-design"
/>
```

```css
@media (min-width: 1200px) {
  .mobile-design {
    display: none;
  }
  .desktop-design {
    display: block;
    border-radius: 10px 0 0 10px;
  }
}
```

- I learned about how to uppercase and letter space a word in HTML using CSS 

```html
<p class="letter-space">Perfume</p>
```

```css
.letter-space {
  text-transform: uppercase;
  letter-spacing: 4px;
}
```

### Continued development

- To improve on time management especially in CSS tasks


## Author

- Github - [Aishat02](https://github.com/Aishat02)
- Frontend Mentor - [Aris](https://www.frontendmentor.io/profile/Aishat02)
- Twitter - [aishat_tijani](https://www.twitter.com/aishat__tijani)
