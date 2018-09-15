# Welcome to Qwirk !

![Qwirk](https://image.ibb.co/cdo4TK/logo.png)

Qwirk is an application like [Discord](https://discordapp.com/) - An all-in-one voice and text chat. 

## Why ?

It was an old end of year project at Supinfo. I started again a year ago because i love this project.

I have a multitude of ideas to make it more plaisant, like the utilisation of TensorFlowJS for some things.

## Getting Started

### Prerequisites

You need Docker and Docker-Compose to be able to run this project.

  - Docker: https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository
  - Docker Compose: https://docs.docker.com/compose/install/#install-compose

### Installing

- clone the project
- npm i in each folder (back & front)
- sudo docker-compose up --build
- Everything is okay !

If you have problem with `npm i` on the back folder, you need to:

- `sudo apt-get install python-minimal`
- `sudo apt-get install build-essential`

And here, if you have problem with `npm i` on the front folder:

`sudo apt-get install libgconf-2-4`

## Running the tests

You can run some test from the front folder :

Unit testing

`npm run test`

End to end testing

`npm run e2e`

Unit testing are pointless for now... E2e testing test authentications and edition of the user information.

## Built with

* [NodeJS](https://nodejs.org/en/) - Free and opensource server environment
* [VueJS 2](https://vuejs.org/) - Front End Framework
* [RethinkDB](https://www.rethinkdb.com/) - I love RethinkDB ! but this is down :'(
* [Redis](https://redis.io/) - key/value pair database
* [Electron](https://electronjs.org/) - Create dekstop app
* [ES6](http://es6-features.org/) - Following ES6 Specifications
* [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript
* [JavaScript](https://www.javascript.com/) - You should know what is it ^^
* [HTML5 & CSS3](https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3)


## Versioning

I use [SemVer](http://semver.org/) for versioning. 

## Author

* **SENECHAL Maxime** - *FullStack Developer* - Aka [Ravaniss](https://github.com/Ravaniss)

## What to come ?

- \[x] Remove step 4 to 6 included on the install' steps...
- \[ ] Big refactoring CSS to SASS would be greatful
- \[ ] A website to present the project and have the possibility to download it
- \[ ] A new logo
- \[ ] Using TensorFlowJS

## License

Coming Soon ...

## Acknowledgments

I had permission to discord to reproduce their design. It's maybe useless but it's important to me !

![Discord Agreement](https://image.ibb.co/efZmQz/Capture.jpg)