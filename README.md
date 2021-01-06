<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/LouisKlimek/HeadlessDetectJS">
    <img src="logo.png" alt="HeadlessDetectJS" width="80" height="80">
  </a>

  <h3 align="center">HeadlessDetectJS</h3>

  <p align="center">
    A JavaScript library that provides a score for the likelihood of a user using a headless browser.
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Contributing](#contributing)
* [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

This JavaScript library is only going to test and provide a score for the likelihood of a user using a HEADLESS BROWSER and NOT BROWSER AUTOMATION in general.

Logo made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Get the `headlessDetect.js` file and put it in your Project Folder.

3. Link to it in the HTML of your Website.
```
<script type="text/javascript" src="./headlessDetect.js"> </script>
```

4. Construct a new Headless Detector and can call the `getHeadlessScore()` Function to see the likelihood of a user using a Headless Browser and then do with it whatever you want.
```
var headlessDetector = new HeadlessDetect();

if(headlessDetector.getHeadlessScore() > 0.25){
    console.log("Headless Browser detected");
}
```


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the Apache License 2.0. See `LICENSE` for more information.
