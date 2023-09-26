import { useEffect, useState } from "react";

export default function PokemonHook() {
	// [variable, function to set variable] = useState(initial value)
	const [pokemon, setPokemon] = useState({});
	const [example, setExample] = useState("example");

	useEffect(() => {
		let fetchData = async () => {
			let apiResponse = await fetch(
				"https://pokeapi.co/api/v2/pokemon/25"
			);
			// get random pokemon
			let apiData = await apiResponse.json();

			setPokemon(apiData);
		};

		fetchData();
	}, []);

	if (pokemon.name) {
		return (
			<div>
				<h1>{example}</h1>
				<h1>{pokemon.name}</h1>
			</div>
		);
	} else {
		return <div>No data to show...</div>;
	}
}
