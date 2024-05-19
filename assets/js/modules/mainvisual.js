import { fadeIn, fadeOut } from './fade.js';

document.addEventListener("DOMContentLoaded", function(){
	setTimeout(function() {
		fadeIn( document.querySelector( '.catch1' ), 800, 'block' );
	}, 200 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch2' ), 800, 'block' );
	}, 400 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch3' ), 800, 'block' );
	}, 600 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch4' ), 800, 'block' );
	}, 800 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch5' ), 800, 'block' );
	}, 1300 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch6' ), 800, 'block' );
	}, 1600 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch7' ), 800, 'block' );
	}, 2000 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch8' ), 800, 'block' );
	}, 2400 );
	setTimeout( function() {
		fadeIn( document.querySelector( '.catch9' ), 800, 'block' );
	}, 2800 );
} );

export const mainvisual = () => {}
