import { index } from "./modules/html.js";
import { pokeapi } from "./modules/pokeapi.js";
import 'destyle.css';
import '/assets/scss/style.scss';

document.addEventListener( 'DOMContentLoaded', () => {
	index();
	console.log( pokeapi() );
} )
