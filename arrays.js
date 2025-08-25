let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder ---
//opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
console.log("----------- OPGAVE 1 -----------")
/** @param {number} amount "0-9999"  * @returns "LIST"*/
function returnNumberAbove(amount) {
	return numbersArray.filter((cValue) => cValue > amount)
}

console.log(returnNumberAbove(20))

// Opgave 2
// Tilføj katten "Sniffles" til catsArray.
// Udskriv arrayet i konsollen.
// console.log("Opgave 2", ...)
console.log("----------- OPGAVE 2 -----------")
/** ** @param {string} name "fx: 'Sniffles'"  */
function addCatName(name) {
	catsArray.push(name)
	console.log(`Added new cat named: ${name}`)
	console.log(catsArray)
}

addCatName("Sniffles")

// Opgave 3a
// Check om der i dogsArray er en hund som hedder "Trixie".
// Udskriv "true" eller "false" i konsollen afhængig af svaret.
// console.log("Opgave 3a", ...)
console.log("----------- OPGAVE 3a ----------")
/** @param {string} name "fx: 'Trixie'" */
function returnBoolOfName(name) {
	let returning = false
	dogsArray.forEach((cValue) => {
		if (cValue == name) {
			returning = true
		}
	})

	return returning
}

console.log(`Found the dog: ${returnBoolOfName("Trixie")}`)

// Opgave 3b
// Check om der i dogsArray er en hund som hedder "Baxter".
// Udskriv "true" eller "false" i konsollen afhængig af svaret.
// console.log("Opgave 3b", ...)
console.log("----------- OPGAVE 3b ----------")
console.log(`Found the dog: ${returnBoolOfName("Baxter")}`)

//     Opgave 4a
// Check om der i catsArray er en kat som hedder "Bagheera".
// Udskriv katten i konsollen hvis den findes og ellers "undefined".
// console.log("Opgave 4a", ...)
console.log("----------- OPGAVE 4a ----------")
/** @param {string} name "fx: 'Bagheera'" */
function returnCatBoolName(name) {
	dogsArray.forEach((cValue) => {
		if (cValue == name) {
			return name
		}
	});

	return undefined
}

console.log(`Found the cat: ${returnBoolOfName("Bagheera")}`)

// Opgave 4b
// Check om der i catsArray er en kat som hedder "Salem".
// Udskriv katten i konsollen hvis den findes og ellers "undefined".
// console.log("Opgave 4b", ...)
console.log("----------- OPGAVE 4b ----------")
console.log(`Found the cat: ${returnBoolOfName("Salem")}`)

//     Opgave 5
// Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
// Udskriv det nye array i konsollen:
// console.log("Opgave 5", ...)
console.log("----------- OPGAVE 5 -----------")
/** @param {number} number "fx: '3'" */
function returnArrayWithExtra(number) {
	let returnArray = []
	numbersArray.forEach((cValue) => {
		returnArray.push(cValue * number)
	})

	return returnArray
}
console.log(returnArrayWithExtra(3))

//     Opgave 6
// Udskriv alle hundene i dogsArray i én lang streng.
// (Sådan her: BarneyMollyBaxter...)
// Udskriv strengen konsollen:
// console.log("Opgave 6", ...)
console.log("----------- OPGAVE 6 -----------")
console.log(dogsArray.toString().replaceAll(",", ""))

//     Opgave 7a
// Find ud af hvilket index "Mango" har i fruitsArray.
// Udskriv indexet i konsollen.
console.log("----------- OPGAVE 7a ----------")
/** @param {string} name "fx: 'Mango'" */
function findReturnFruitNamed(name) {
	return fruitsArray.indexOf(name)
}

console.log(findReturnFruitNamed("Mango"))

// Opgave 7b
// Find ud af hvilket index "Blåbær" har i fruitsArray.
// Udskriv indexet i konsollen.
console.log("----------- OPGAVE 7b ----------")
console.log(findReturnFruitNamed("Blåbær"))

// Opgave 8
// Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
// Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
// Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
//  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
console.log("----------- OPGAVE 8 -----------")
/** @param {string} name "fx: 'Polly'" */
function removeDogFromArray(name) {
	dogsArray.splice(dogsArray.indexOf(name), dogsArray.indexOf(name))
	return name
}

console.log(`Removed Dog named: ${removeDogFromArray("Polly")}`)
console.log(dogsArray)
