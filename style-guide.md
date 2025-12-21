# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Soft orange: hsl(35, 77%, 62%)
- Soft red: hsl(5, 85%, 63%)

### Neutral

Off-white: hsl(36, 100%, 99%)
Grayish blue: hsl(233, 8%, 79%)
Dark grayish blue: hsl(236, 13%, 42%)
Very dark blue: hsl(240, 100%, 5%)

## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700, 800

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma.

<div class="col-md-4">
          <div class="d-flex">
            <div>
              <img
                src="assets\images\image-retro-pcs.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ms-4">
              <h2>01</h2>
              <h4>Reviving Retro PCs</h4>
              <p>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex">
            <div>
              <img
                src="assets\images\image-top-laptops.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ms-4">
              <h2>02</h2>
              <h4>Top 10 Laptops of 2022</h4>
              <p>Our best picks for various needs and budgets.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="d-flex">
            <div>
              <img
                src="assets\images\image-gaming-growth.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="ms-4">
              <h2>03</h2>
              <h4>The Growth of Gaming</h4>
              <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
        </div>
      </div>




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./assets/images/favicon-32x32.png"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>

    <link rel="stylesheet" href="src\style.css" />

    <!--Google Font-->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
    <title>Frontend Mentor | News homepage</title>
  </head>
  <body class="container-md main">
    <nav class="navbar navbar-expand-md bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="assets\images\logo.svg" alt="logo" class="logo" />
        </a>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"

          class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
        >
          <span>
            <img src="assets\images\icon-menu.svg" alt="" />
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Popular</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!---->
    <button
      class="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasWithBothOptions"
      aria-controls="offcanvasWithBothOptions"
    >
      Enable both scrolling & backdrop
    </button>

    <div
      class="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabindex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Backdrop with scrolling
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p>Try scrolling the rest of the page to see this option in action.</p>
      </div>
    </div>
    <div class="px-3">
      <picture>
        <source
          media="(min-width:768px)"
          srcset="assets\images\image-web-3-desktop.jpg"
        />
        <img
          src="assets\images\image-web-3-mobile.jpg"
          alt="web 3 design"
          class="img-fluid web3"
        />
      </picture>

      <h1>The Bright Future of Web 3.0?</h1>
      <p class="h1-text">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button class="btn read-more text-uppercase">Read more</button>
      <div class="updates">
        <h2>New</h2>
        <h3>Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />
        <h3>The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
      <div class="row">
        <div class="col-md-4 d-flex">
          <img
            src="assets\images\image-retro-pcs.jpg"
            alt=""
            class="m-t-8"
            width="100"
            height="129"
          />
          <div class="ms-4 col-md m-t-4">
            <h2>01</h2>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div class="col-md-4 d-flex m-t-4">
          <div>
            <img src="assets\images\image-top-laptops.jpg" alt="" width="100" />
          </div>
          <div class="ms-4 col-md">
            <h2>02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div class="col-md-4 d-flex">
          <div>
            <img
              src="assets\images\image-gaming-growth.jpg"
              alt=""
              class="m-t-3"
              width="100"
            />
          </div>
          <div class="ms-4 col-md">
            <h2>03</h2>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
      <div class="attribution text-center">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
          >Frontend Mentor</a
        >. Coded by <a href="#">Aris</a>❤️.
      </div>
    </div>
  </body>
</html>
