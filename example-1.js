// Run the code here, no problems?

function getPriceWithTax(amount, rate) {
	const price = amount.toFixed(2)
	const tax = price * rate
	console.log('type of price:', typeof price)
	console.log('type of tax:', typeof tax)
	return (price + tax)
}

const answer = getPriceWithTax(23.99, 9.5)
console.log(answer)

// Run the code here and look at the results
	//23.99227.90499999999997
// Does it look right? 
	// No
// What went wrong?
	// The price and tax are different types, the price is a string and the tax is a number


