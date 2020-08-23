[![LinkedIn][linkedin-shield]][linkedin-url] <br />
![Twitter Follow](https://img.shields.io/twitter/follow/Sthefano_C?style=social)


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sthefanocarvalho


<h1 align="center">Be the Hero - Semana OmniStack App</h1>

<p align="center">
  <img width="100%" alt="Be the Hero Project Reaact - Semana Omnistack" src="https://github.com/sthefanoc/omnistack11-be-the-hero/blob/master/outros/Be-The-Hero%20-%20SemanaOmnistack11%20-%20Header.gif">
</p>

A Hangman Game in which the user has to get the right Beatles music.

## Screenshots

<table>
	<tr>
		<th width="70%">
			Web App - React.Js
		</th>
		<th width="30%">
      Mobile App - React Native
		</th>
	</tr>
	<tr><!-- Prevent zebra stripes --></tr>
	<tr>
		<td align="center">
			<img height="450" src="https://github.com/sthefanoc/omnistack11-be-the-hero/blob/master/outros/be-the-hero-mobile.gif">
		</td>
		<td align="center">
			<img height="450" src="https://github.com/sthefanoc/omnistack11-be-the-hero/blob/master/outros/be-the-hero-frontend.gif">
		</td>
	</tr>
</table>


## Getting Started

### Cloning the project
To get this running on another machine, just clone the repo and run the command to start the server:
```
npm start
```
### How To Play The Game

Select a letter to figure out a hidden word in a set amount of chances

### Project Specifications

- Display hangman pole and figure using SVG
- Generate a random Beatles music
- Display word in UI with correct letters
- Display wrong letters
- Show notification when select a letter twice
- Show popup on win or lose
- Play again button to reset game


### Prerequisites

No external libraries were used. The media files for the project are inside the "assets" page, inside "src". The files are referenced on the app.



### Styles

The website is responsive. Using media-queries the app can be used on desktop or smaller screens.


## Deployment

The app is deployed on gh-pages. To make this work, it's necessary to install the npm package and add two scripts on "package.json" file.
### Install gh-pages
```
npm install gh-pages --save-dev
```
### Scritps to add to package.json
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The editor
* [Create React App](https://github.com/facebook/create-react-app) - The framework


## Authors

* **Sthefano Carvalho** - [SthefanoC](https://github.com/sthefanoc)


## Acknowledgments

* This project is the **nº03** commit of my [#100DaysOfCode](https://www.100daysofcode.com/) journey to improve my ReactJS abilities
* The Beatles Hangman game is an adaptation of a code by [codeSTACKr](https://github.com/codeSTACKr/hangman-react)
* The original version, in vanilla JS was made by [Brad Traversy](https://github.com/bradtraversy/vanillawebprojects/blob/master/hangman/)
* Follow me on twitter and see my other projects: [Sthefano_C](https://twitter.com/Sthefano_C)


