# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Loopstudios landing page solution](#frontend-mentor---loopstudios-landing-page-solution)
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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

- I learnt that i need to improve on managing my time when solving challenges
- I learnt more about positioning elements (relative and absolute)
- I learnt how and when to use the CSS pseudoselectors (::before and ::after)

```css
nav a:hover::after {
  content: "";
  display: block;
  background-color: var(--White);
  height: 2px;
  width: 47%;
  position: absolute;
  top: 104%;
  left: 14px;
}
```

- I learnt how to use the transition property

```css
nav a {
  position: relative;
  transition: all 0.4s ease-in;
}
```

### Continued development

- Learn ReactJs
- Learn Bootstrap
- Build projects with animations

## Author

- Github - [Aishat02](https://github.com/Aishat02)
- Frontend Mentor - [Aris](https://www.frontendmentor.io/profile/Aishat02)
- Twitter - [aishat_tijani](https://www.twitter.com/aishat__tijani)
