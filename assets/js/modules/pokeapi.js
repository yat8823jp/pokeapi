const BASE_URL = 'https://pokeapi.co/api/v2/';

async function get_pokemon_japanese_name( english_name ) {
	try {
		const response = await fetch( BASE_URL + `pokemon-species/${ english_name.toLowerCase() }` );
		if ( ! response.ok ) {
			throw new Error( "Japanese name acquisition error" );
		} else {
			const data = response.json();
			data.then(
				value => {
					for( let index in value.names ) {
						// console.log( value.names[index]['name'] );
						const language = value.names[index]['language']['name'];
						const japanese_name = value.names[index]['name'];
						if ( language == 'ja-Hrkt' ) {
							console.log( japanese_name );
							return japanese_name;
						} else {
							return 'Not Found japanese name';
						}
					}
				}
			);
		}
	} catch ( error ) {
		console.error( "There has been a problem with your fetch operation:", error );
	}
}

const english_name = "Bulbasaur";
// const japanese_name = get_pokemon_japanese_name( english_name )
// 	.then(
// 		value => {
// 			// console.log(value['names']);
// 			for( let name_info in value.names ) {
// 				// console.log( name_info );
// 				// console.log( value.names[name_info]['name'] );
// 				if ( value.names[name_info]['language']['name'] == 'ja-Hrkt' ) {
// 					return value.names[name_info]['name'];
// 				} else {
// 					return 'Not Found japanese name';
// 				}
// 			}
// 		}
// 	);
// let result;
const japanese_name = get_pokemon_japanese_name( english_name );
console.log( japanese_name );
// console.log( result );

export const pokeapi = ( japanese_name ) => {}
