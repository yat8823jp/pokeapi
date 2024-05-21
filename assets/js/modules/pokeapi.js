const BASE_URL = 'https://pokeapi.co/api/v2/';
const result_en = document.getElementById( 'result_en' );
const result_jp = document.getElementById( 'result_jp' );
const submit_en = document.querySelector( '.js-submit_en' );
const submit_jp = document.querySelector( '.js-submit_jp' );

async function get_pokemon_japanese_name( get_english_name ) {
	try {
		const response = await fetch( BASE_URL + `pokemon-species/${ get_english_name.toLowerCase() }` );
		if ( ! response.ok ) {
			throw new Error( "Japanese name acquisition error" );
		}
		const data = await response.json();
		console.log(data);
		for( let index in data.names ) {
			const language = data.names[index]['language']['name'];
			const set_japanese_name = data.names[index]['name'];
			if ( language == 'ja-Hrkt' ) {
				result_en.textContent = set_japanese_name;
				return set_japanese_name;
			} else {
				return 'Not Found Japanese name';
			}
		}
	} catch ( error ) {
		result_en.textContent = '日本語名が見つかりませんでした';
		console.error( "There has been a problem with your fetch operation:", error );
	}
}

async function get_pokemon_english_name( get_japanese_name ) {
	try {
		const response = await fetch( BASE_URL + `pokemon-species/${ get_japanese_name }` );
		if ( ! response.ok ) {
			throw new Error( "Japanese name acquisition error" );
		}
		const data = await response.json();
		console.log(data);
		for( let index in data.names ) {
			const language = data.names[index]['language']['name'];
			const set_english_name = data.names[index]['name'];
			if ( language == 'en' ) {
				result_jp.textContent = set_english_name;
				return set_english_name;
			} else {
				return 'Not Found English name';
			}
		}
	} catch ( error ) {
		result_jp.textContent = 'Not Found English name';
		console.error( "There has been a problem with your fetch operation:", error );
	}
}

submit_en.addEventListener( 'click', () => {
	const get_english_name = document.getElementById( 'pokemon_name_en' ).value;
	get_pokemon_japanese_name( get_english_name );
} );


submit_jp.addEventListener( 'click', () => {
	const get_japanese_name = document.getElementById( 'pokemon_name_jp' ).value;
	get_pokemon_english_name( get_japanese_name );
} );

export const pokeapi = () => {}
