// ENHANCED LAPTOP OBJECT : CONSTRUCT AN OBJECT FOR A LAPTOP INCLUDING PROPERTIES MAKE, MODEL , YEAR AND A METHOD DESCRIBED() THAT LOGS A SENTENCE ABOUT THE LAPTOP
let Laptop = {
  make: "apple",
  model: "mac book pro",
  year: 2022,
  describe() {
    console.log(`This is a ${this.year} ${this.make} ${this.model} laptop.`);
  },
};
Laptop.describe();
