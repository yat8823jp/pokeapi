const BASE_URL = 'https://pokeapi.co/api/v2/';
const result = document.getElementById( 'result' );
const submit = document.querySelector( '.js-submit' );

async function get_pokemon_japanese_name( english_name ) {
	try {
		const response = await fetch( BASE_URL + `pokemon-species/${ english_name.toLowerCase() }` );
		if ( ! response.ok ) {
			throw new Error( "Japanese name acquisition error" );
		}
		const data = await response.json();
		for( let index in data.names ) {
			const language = data.names[index]['language']['name'];
			const japanese_name = data.names[index]['name'];
			if ( language == 'ja-Hrkt' ) {
				result.textContent = japanese_name;
				return japanese_name;
			} else {
				return 'Not Found japanese name';
			}
		}
	} catch ( error ) {
		console.error( "There has been a problem with your fetch operation:", error );
	}
}

submit.addEventListener( 'click', () => {
	const english_name = document.getElementById( 'pokemon_name' ).value;
	get_pokemon_japanese_name( english_name );
} );

export const pokeapi = () => {}
