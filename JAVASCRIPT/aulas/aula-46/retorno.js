function calculateAverage(a, b) {
    const average = (a + b) / 2
    return average // is used so that we can work with values outside the function
}

const result = calculateAverage(7, 2)
console.log(result)

//-----------------------------------------------

function createProduct(name, price) {
    const product = {
        name: name,
        price: price,
        productStock: 1
    }
    return product
}

const laptop = createProduct("leptop Intel core i3 SSD 500GB 8RAM", 2500)

console.log(laptop)

/********************************************************/

function rectangularArea(base, height) {
    return base * height // I can call the expression directly, it doesn't have to be a variable 
}
console.log(rectangularArea(3, 5))

function squareArea(side) {
    return rectangularArea(side, side) //i can return in another function to execute what i want
}
console.log(squareArea(9))

//in this case it worked, because I calculate both in the same way