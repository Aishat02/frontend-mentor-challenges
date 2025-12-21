# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

- I learnt about the picture and source element

```html
<picture>
  <source
    media="(min-width: 800px)"
    srcset="./images/pattern-divider-desktop.svg"
  />
  <img src="./images/pattern-divider-mobile.svg" alt="horizontal line" />
</picture>
```

- I learnt about the transition and transform elements
- 2D and 3D transition properties

```css
.dice.active {
  transform: rotate(40deg);
  padding: 0 0 0 3px;
  animation: x 250ms ease 0.5ms infinite both;
}
@keyframes x {
  100% {
    transform: rotate(120deg);
  }
}
```

- I learnt about async and await function, promises and the try & catch statements
- I learnt about how to use the async and await function with axios library
- I compared and learnt the differences between using axios and fetch library

```js
async function generateAdvice() {
  try {
    let response = await axios.get(adviceApi);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}
```

- I learnt about how to load response from the API immediately the webpage has loaded

```js
document.addEventListener("DOMContentLoaded", generateAdvice);
```

### Continued development

- To learn ReactJs and Bootstrap
- To utilize more free API's data using the axios & fetch library

## Author

- Github - [Aishat02](https://github.com/Aishat02)
- Frontend Mentor - [Aris](https://www.frontendmentor.io/profile/Aishat02)
- Twitter - [aishat_tijani](https://www.twitter.com/aishat__tijani)
