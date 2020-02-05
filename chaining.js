/*Using one single line of JavaScript code, complete the following tasks on the array of integers below.

Sort the numbers in descending order (10, 9, 8, 7, etc).
Remove any integers greater than 19.
Multiply each remaining number by 1.5 and then subtract 1.
Then output (either in the DOM or the console) the sum of all the resulting numbers.
*/

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const newIntegers = integers.sort((a, b) => a - b).map(integer => {
    if (integer <= 19) {
        return integer * 1.5
    }

})

console.log(newIntegers)
// console.log(newIntegers)

/*
.reduce((amountA, amountB) => amountA + amountB)


let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]


const planetEl = document.getElementById("planets");

const renderPlanets = () => {
    planets.forEach(planet => {
        planetEl.innerHTML += `
                    <h2>${planet}</h2>
        `
    });
};
renderPlanets();


const newPlanets = planets.map(planets => {
    return planets[0].toUpperCase() + planets.slice(1)
})

const filteredPlanets = planets.filter(planet => {
    let planetsWithLetterE = false
    
    if (planet.includes('e')) {
        planetsWithLetterE = true
    }
    
    return planetsWithLetterE
})
*/