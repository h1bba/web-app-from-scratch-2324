# Web App From Scratch (@cmda-minor-web 2023 - 2024)

## Website Agency Ufuk

Welcome to one of my future (hopefully) agency websites. Within this site you can find a hero section, some information about me, recent projects (coming soon), the tools I use, a connect form, a pokedex and finally a cool interactive CTA section

Design Mockup:
![dekstop UI](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/46adf734-61e5-48e7-9916-31723cbe1e28)
![Mobile](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/10af4553-069b-4a2e-b4b8-939f994306fa)

I had created a UI Design before I started attending this minor, hence why I already had a good idea what my site was going to be about.
I had to make some adjustment to the design to fit it with the requirements of the instructions. For example the pokedex was not intended at first, but because fetching external data is a requirement the pokedex found it's way in the website. 

## API Data
I'm fetching data from **3** separate places.
### data.json (local)
The first data fetch is my info. I dynamically display this data at certain places in my site.

![data.json](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/eb27db10-415c-4099-b658-f6bf195ebe5c)

This is just a local JSON file with some JSON data about myself.
This is the code in the JS file to fetch the data. As you can see were putting firstName, age and city into an html element.

![js data](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/72ee95c2-ece6-4cb9-b630-1294bde513aa)

This is how it looks on the website

![data display](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/268429ff-0746-47f6-8fb6-06526004c1c6)

### tools.json (local)
The second data fetching is for the Tools section.
I've never before fetched an image and put it in html, so I wanted to try that out.
This is what the skills.json looks like:

![skills.json](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/e15e900d-91bf-49c7-b1cb-c0a83d43c05d)

As you can see it is simply a name combined with an image.

![JS skills](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/0846f01a-72aa-4391-9d0e-377310484697)

This is what the JS looks like, i've added comments to make it easier to understand,

This is what it looks like on the website:

![Tools](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/050359d1-e796-420e-b253-2ba719872d75)

### PokeAPI V2 (Extern)
https://pokeapi.co/


After this I felt like I hadn't challenged myself so i tried to use an external API. After some research I've had come across PokeAPI V2.
I didn't want to set up a NodeJS server but soon found out that almost all API's have private key's which you need a .env file for.
So PokeAPI it is!


![JS PokeAPI](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/965b112d-1839-40f9-bb6f-68ac47c4da73)
![JS PokeAPI](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/5cf68bef-2293-4cf9-a594-fa7bc2d29c6d)

I've had followed a tutorial to achieve my desired requirements. (https://www.youtube.com/watch?v=T-VQUKeSU1w&t=1409s)
This is how it turned out on the site:

![Pokedex](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/83b01760-8471-4f55-b751-79d1ed19ff05) ![Pokedex IRL](https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/02/pokedex-chatgpt1-gID_7.png@webp)

## Features/Sections

### Hero section
There is not much functionality here, the buttons do not link through (because we're supposed to make 1 page)

![Hero](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/8a793404-98de-4bd4-8da7-ba5f2aa2a9ba)

### Recent work section
I used a screenshot of a site im currently building to display some recent work i've made, there is a fade-in animation separate on the image too.

![Recent work](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/2a5397fc-5609-4fa8-b2cc-793a4bef3c94)

### Meet me section
The meet me section fetches data from a json to fill in the H2's this data is also used to display my data on the team website.

![duizendpoot](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/af89f855-481f-4a87-a1eb-5f10dee2a634)
![code duizendpoot](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/c64abee4-5479-4ada-84a6-cf69f2c3d877)


### Tools section
This section fetches data from a JSON file, including the image string. These are displayed dynamically on the website.

![Tools](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/934215f2-bd9c-403d-beb3-c5c8e2869c0a)
![code tools](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/2dfd308c-c3c3-4acd-a09f-2efd9899c7b1)

### Connect section
For the connect section I've created a form with some simple fields, the email can easily be sent by using an external email service provider (example: https://formsubmit.co/)
I didn't make the form sendable because I didn't want to get spammed by bots.

![form](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/10d97709-0cc8-4937-877b-ef161e493a74)

### Pokedex section
The pokedex uses PokeAPI V2, this is an (external data) API, You can search up any pokemon in the database and see the details like height, weight and energy style of the pokemon.

![pokedex](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/1a3b608b-96bb-4496-b755-1203f1c0e490)
![cdode pokedex 1](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/3001a52b-d421-4949-a6df-859fc608ebe1)
![code pokedex 2](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/ff103262-f6c6-4aa2-b4af-b285707fb67b)

### Quote/CTA section
The Quote section has text that says "Samen zetten we de wereld op zijn kop", translated this means: "Together we will turn the world upside down".
![Quote](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/b95aa5c9-bbc0-42cf-8ba1-741c148b8fc1)

The globe has a CSS animation, to keep spinning itself.

![css animation](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/f0239709-2da8-46e2-8871-e937aaeb1215)

![css](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/e92224c2-8ce2-44f3-a997-739495c2eb02)

When the globe is clicked, the whole page turns upside down:

![flipped site](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/d782d325-2453-442c-8851-d25b0fbf31a7)

It is easily achieved with toggling a .flipped class to the body

![js flip code](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/375d3c47-fe5c-4a97-bac3-f2728e06d19b)

## Entry animation (Experimental view() usage)
Google Chrome has a new experimental feature, before we had to use libraries like "intersection observer" or "Motion-Framer". Chrome has implemented scroll driven animation through css, so we do not have to use these libraries anymore and can use vanilla JS and CSS to get the same results.

For my own project I've implemented a fade-in animation for the sections:

![Css](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/73e7dd25-4e4b-4535-800d-56b79a912971)

![Css animation](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/4c367169-c55a-4e8b-a5a2-fe8374e2a6d7)

I've achieved a scroll-driven reveal animation:

![Scroll hidden](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/33c0fcd4-0894-41ba-8ff6-bc24dd04727a)

![Scroll reveal](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/6e7fb2e3-0596-432c-bf93-4765c2feca2c)










