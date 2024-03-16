//combining arrays with spread operator: suppose you are comparing prices of two different sets of laptops.use the spraed operator to combine these arrays into a single array sorted in ascending order, then log the result.
const laptopPrices1: number[] = [1200, 1500, 1800];
const laptopPrices2: number[] = [1000, 1700, 2000];

// Combine arrays using the spread operator
const combinedPrices: number[] = [...laptopPrices1, ...laptopPrices2];

// Sort the combined prices in ascending order
combinedPrices.sort((a, b) => a - b);

// Log the sorted prices
console.log("Sorted laptop prices:", combinedPrices);
