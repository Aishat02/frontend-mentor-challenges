# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- See hover states for interactive elements

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

- I learnt how to make one image appear on top of another when the other image is hovered

```html
<div class="image">
  <img src="./images/icon-view.svg" class="eye" />
  <img
    src="./images/image-equilibrium.jpg"
    alt="equilibrium"
    class="equilibrium"
  />
</div>
```

```css
.equilibrium {
  border-radius: 10px;
  width: 310px;
}
.eye {
  position: absolute;
  top: auto;
  right: auto;
  padding: 7.3em;
  opacity: 0;
  border-radius: 10px;
  background-color: rgba(0, 148, 160, 0.7);
}
.image:hover .eye {
  opacity: 1;
}
```

- I learnt how to make double box shadows for a single container

```html
<div class="border-container">
  <div class="container"></div>
</div>
```

```css
.border-container {
  border-radius: 10px;
  padding-bottom: 1.5em;
  box-shadow: 0px 20px 0 2.5em #0c192c;
}
.container {
  border-radius: 15px;
  box-shadow: 0px 2em 0 1em #0c1729;
}
```

### Continued development

- To learn about z-index
- To improve on time management

## Author

- Github - [Aishat02](https://github.com/Aishat02)
- Frontend Mentor - [Aris](https://www.frontendmentor.io/profile/Aishat02)
- Twitter - [aishat_tijani](https://www.twitter.com/aishat__tijani)
