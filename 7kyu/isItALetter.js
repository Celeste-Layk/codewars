// Write a function, isItLetter or is_it_letter, which tells us if a given character is an, uppercase or lowercase, letter.

function isItLetter(character) {
  return character == character.toUpperCase()
    ? character !== character.toLowerCase()
    : character !== character.toUpperCase();
}
