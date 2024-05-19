document.addEventListener( 'scroll', function () {
	const scrollAnimationElm = document.querySelectorAll( '.fade-in' );
	const scrollAnimationFunc = function () {
		for ( var i = 0; i < scrollAnimationElm.length; i++ ) {
			var triggerMargin = 50;
			if ( window.innerHeight > scrollAnimationElm[ i ].getBoundingClientRect().top + triggerMargin ) {
				scrollAnimationElm[ i ].classList.add( 'on' );
			}
		}
	}
	window.addEventListener( 'load', scrollAnimationFunc);
	window.addEventListener( 'scroll' , scrollAnimationFunc);
} );

export const pageFadein = () => {}
