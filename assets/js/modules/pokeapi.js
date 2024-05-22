const BASE_URL = 'https://pokeapi.co/api/v2/';
const result = document.getElementById( 'result' );
const submit = document.querySelector( '.js-submit' );

async function get_pokemon_english_name( get_japanese_name ) {
	try {
		const response = await fetch( `./assets/json/list.json` );
		if ( ! response.ok ) {
			throw new Error( "Read error for json file" );
		}
		const pokemon_list = await response.json();
		const key = "ja-Hrkt";
		const name_list = () => {
			const pokemon_index = pokemon_list.findIndex( data => data["ja-Hrkt"] === get_japanese_name );
			return pokemon_list[ pokemon_index ];
		};
		const pokemon_name = name_list( get_japanese_name );
		result.textContent =  pokemon_name.en;
		get_pokemon_data( pokemon_name.en );

		return pokemon_name.en;
	} catch ( error ) {
		console.error( "Read error for json file" );
	}
}

async function get_pokemon_data( english_name ) {
	try {
		const response = await fetch( BASE_URL + `pokemon/${ english_name.toLowerCase() }` );
		if ( ! response.ok ) {
			throw new Error( "Pokemon data acquisition error" );
		}
		const data = await response.json();
		console.log( data );
		const versions =data.game_indices.map( index => index.version.name )
		if ( data ) {
			document.querySelector( '#app' ).innerHTML =
				`
					<p>No.：${ data.id }</p>
					<p>重量：${ data.weight }</p>
					<p>登場作品</p>
					<ul>
						<li>${ `${ versions.join("</li><li>") }` }</li>
					</ul>
				`;
		}
		return data;
	} catch ( error ) {
		console.error( "There has been a problem with your fetch operation:", error );
	}
}

submit.addEventListener( 'click', () => {
	const get_japanese_name = document.getElementById( 'pokemon_name_jp' ).value;
	get_pokemon_english_name( get_japanese_name );
} );

export const pokeapi = () => {}
