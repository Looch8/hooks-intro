import { useEffect, useState } from "react";

export default function PokemonHook() {
	// [variable, function to set variable] = useState(initial value)
	const [pokemon, setPokemon] = useState({});
	const [example, setExample] = useState("example");

	useEffect(() => {
		setPokemon({ name: "Pikachu" });
	}, []);

	return (
		<div>
			<h1>{example}</h1>
			<h1>{pokemon.name}</h1>
		</div>
	);
}
