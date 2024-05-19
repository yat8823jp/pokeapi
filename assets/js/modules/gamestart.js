import { fadeIn, fadeOut } from './fade.js';

document.addEventListener( "DOMContentLoaded", function() {
	const pagetop = document.getElementById( 'js-game-start' );
	const mainvisual = window.innerHeight;
	pagetop.style.display = "none";
	document.addEventListener( "scroll", function() {
		if ( window.scrollY > mainvisual - 70 ) {
			fadeIn( pagetop, 600, 'block');
		} else {
			pagetop.style.display = "none";
		}
		const scrollHeight   = document.body.clientHeight;
		const scrollPosition = window.innerHeight + window.innerHeight.scrollY;
		const footHeight = document.querySelector( '.footer' ).getBoundingClientRect().height;

		if ( scrollHeight - scrollPosition	<= footHeight ) {
			pagetop.style.bottom = '100px';
		} else {
			pagetop.style.position = 'fixed';
			pagetop.style.bottom = '10px';
		}
	} );
} );

export const gamestart = () => {}
