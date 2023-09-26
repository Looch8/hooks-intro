import { useState } from "react";

export default function PokemonHook() {
	// [variable, function to set variable] = useState(initial value)
	const [pokemon, setPokemon] = useState({});
	const [example, setExample] = useState("example");
	return (
		<div>
			<h1>{pokemon.name}</h1>
			<h1>{example}</h1>
		</div>
	);
}
