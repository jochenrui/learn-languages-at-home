# learn-languages-at-home

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

<img width="571" alt="image" src="https://user-images.githubusercontent.com/36842990/190911103-c9332387-8da0-4574-9d56-4c6ba16cdc30.png">

There are many ways to practise and learn new languages. Often times we find ourselves wondering how something is said in the language
and while it's handy to just google the translation, we can also leverage this curiosity of ours to learn the new phrase.
This application is supposed to serve this purpose. Using a gap fill technique you can see whether or not you would've known the words
and through encouraging your brain to think, you are also more likely to memorize the new phrase.

This is just a little fun side project I've written on a boring saturday evening. So if you feel like we're missing a feature or anything,
feel free to contribute!

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [Reactjs](https://github.com/facebook/react)
* [Vitejs](https://github.com/vitejs/vite)
* [Expressjs](https://github.com/expressjs/express)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Docker
* some IDE, e.g. VS Code

You will also need a DeepL API Key. To do so, sign up @ DeepL and then add the API key to a .env file

  ```sh
  /.env
  
  DEEPL_API_KEY="your API key"
  PORT="8080"
  ```

### Installation


1. Get a free API Key at [DeepL](https://www.deepl.com/en/docs-api)
2. Clone the repo
   ```sh
   git clone https://github.com/jochenrui/learn-languages-at-home.git
   ```
3. Enter your API key in `/.env` & specify the backend port
   ```sh
   DEEPL_API_KEY="your API key"
   PORT="8080"
   ```
4. Start the application
   ```sh
   docker-compose up
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
