# Web App From Scratch @cmda-minor-web 2023 - 2024

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

I've had followed a tutorial to achieve my desired requirements.
This is how it turned out on the site:

![Pokedex](https://github.com/h1bba/web-app-from-scratch-2324/assets/60386159/83b01760-8471-4f55-b751-79d1ed19ff05) ![Pokedex IRL](https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/02/pokedex-chatgpt1-gID_7.png@webp)




## Features

## Interesting pieces

