function scrollToAnimation ( y, toY, scrollSpeed, scrollTimer = "" ) {
	if ( y > toY ) {
		const scrollAnimeTop = Math.floor( y - ( y / ( scrollSpeed * 2 ) ) );
		window.scrollTo( 0, scrollAnimeTop );
		scrollTimer = setTimeout( function() {
			scrollToAnimation( scrollAnimeTop, toY, scrollSpeed )
		}, scrollSpeed );
	} else {
		clearTimeout( scrollTimer );
		window.scrollTo( 0, toY );
	}
}

export { scrollToAnimation }
