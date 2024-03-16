//Advanced array destructuring :given an array of objects representing different laptops , each with properties make, model and year,use array destructuring to assign the first and second laptops to variables.then,log these variables
type laptoptype = { make:string, model:string, year: number};

const laptops: laptoptype[] = [
  {
    make: "Apple",
    model: "MacBook Pro",
    year: 2022,
  },
  {
    make: "dell",
    model: "xps 13",
    year: 2023,
  },
  {
    make: "hp",
    model: "spectre x360",
    year: 2021,
  },
];
const [firstLaptop, secondLaptop] = laptops;

console.log(firstLaptop);
console.log(secondLaptop);
