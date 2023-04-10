
export function capitalizeText(text: string, delimiter: string, joinCharacter: string):string {
	return text
		.split(delimiter)
		.map((word, index, arr) =>
			['a', 'an', 'the', 'in', 'and', 'of'].includes(word) &&
			index !== 0 && index !== arr.length - 1
				? word
				: word[0].toUpperCase() + word.substring(1)
		).join(joinCharacter);
}

