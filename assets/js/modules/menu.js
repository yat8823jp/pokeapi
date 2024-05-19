const nav = document.querySelector( '.js-nav' );
const body = document.querySelector( 'body' );
const header = document.querySelector( '.js-header' );
const navbt = document.querySelector( '.js-gmenu-btn' );
const drawerbg = document.querySelector( '.drawer-bg' );
const anchors = document.querySelectorAll( '.js-nav li a[href^="#"]' );

//メニューボタン発火//
navbt.addEventListener( 'click', function() {
	this.classList.toggle( 'is-active' );
	nav.classList.toggle( 'is-open' );
	drawerbg.classList.toggle( 'is-open' );
	header.classList.toggle( 'is-open' );
	body.classList.toggle( 'is-open' );
} );

//リンクタップでメニュー閉じる//
const navlinks = document.querySelectorAll( '.js-nav a' );
navlinks.forEach ( navlink => {
	navlink.addEventListener( 'click', function () {
		if ( window.innerWidth <= 769 ) {
			const closeItems = document.querySelector( '.is-open' );
			const closeBtn   = document.querySelector( '.is-active' );
			closeItems.classList.remove( 'is-open' );
			closeBtn.classList.remove( 'is-active' );
			header.classList.remove( 'is-open' );
			drawerbg.classList.remove( 'is-open' );
			nav.classList.remove( 'is-open' );
			body.classList.remove( 'is-open' );
		}
	} );
} );

drawerbg.addEventListener( 'click', function() {
	this.classList.toggle( 'is-open' );
	nav.classList.remove( 'is-open' );
	header.classList.remove( 'is-open' );
	body.classList.remove( 'is-open' );
} );

let timer = 0;
window.onresize = function () {
	if ( timer > 0 ) {
		clearTimeout( timer );
	}

	timer = setTimeout( function () {
		nav.classList.remove( 'is-open' );
		navbt.classList.remove( 'is-active' );
		header.classList.remove( 'is-open' );
		drawerbg.classList.remove( 'is-open' );
		body.classList.remove( 'is-open' );
	}, 200 );
}

export const menu = () => {}
