// question no 50
function MyIdealDay(): string {
  const MyidealDay: string = `
    My Ideal Day:

    Morning:
    - Wake up early and go for a refreshing jog in the park.
    - Enjoy a healthy breakfast while reading a book or listening to music.

    Afternoon:
    - Spend quality time with friends or family, perhaps having a picnic in a scenic spot.
    - Engage in a stimulating conversation or play some outdoor games.

    Evening:
    - Watch a movie or binge-watch a series I've been wanting to catch up on.
    - Relax with a cup of herbal tea and do some meditation or light yoga before bed.

    This would be a perfect balance of activity, relaxation, and enjoyment for me.
    `;

  return MyidealDay;
}

// Output the description
console.log(MyIdealDay());

// question no 51

// Original function declaration
function calculatingArea(width: number, height: number): number {
  return width * height;
}

// Refactored as an arrow function
const calculateArea = (width: number, height: number): number => {
  return width * height;
};

// Calling the function
const rectangleArea = calculateArea(5, 10);
console.log(rectangleArea); // Output: 50

//Question no 52

let Smartphone = {
  Brand: "Realme",
  Model: "Realme 9 Pro+",
  Display: "6.4-inch Super AMOLED display with a 90Hz refresh rate",
  otherkeyfeatures: {
    Processor: " MediaTek Dimensity 920 5G processor",
    Camera:
      "Triple rear camera system with a 50MP Sony IMX766 main sensor, an 8MP ultrawide sensor, and a 2MP macro sensor; 16MP front-facing camera",
    Battery: "4500mAh battery with 60W fast charging",
    Storage: "128GB of storage",
    RAM: "6GB or 8GB of RAM",
    Software: "Android 12 with Realme UI 3.0 on top",
  },
};
console.log(Smartphone);

// Question no 53

const programmerSkills = {
  languages: ["JavaScript", "Python", "Java"],
  tools: ["Visual Studio Code", "Git", "Terminal"],
  frameworks: ["React", "Django", "Spring"],
};
const { languages, tools, frameworks } = programmerSkills;
const firstLanguage = languages[0]; // JavaScript
const secondTool = tools[1]; // Git
const thirdFramework = frameworks[2]; // Spring
for (const skills of Object.values(programmerSkills)) {
  // Access the first skill in each category list
  const firstSkill = skills[0];
  console.log(`Skill: ${firstSkill}`);
}
console.log(`Languages: ${firstLanguage}, ${languages[1]}`);
console.log(`Tool: ${secondTool}`);
console.log(`Framework: ${thirdFramework}`);

// Question no 54

// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
  // Initialize dynamicObject with object literal syntax
  let dynamicObject = {
    [key]: value,
  };
  return dynamicObject;
}

// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");

// Showing the user's choice
console.log(userPreference);

// Question no 55

// Original list of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a new list to store doubled values
const doubledNumbers = [];

// Loop through the original list
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  const doubledNumber = number * 2;
  doubledNumbers.push(doubledNumber);
}

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Question no 56

// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter((item) => typeof item === "string");

// Shows the list of just words
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.

//Question no 57
// A list of grades
let grades = [88, 94, 72, 99, 53, 77];

// Calculates the average grade
let averageGrade =
  grades.reduce((total, grade) => total + grade, 0) / grades.length;

// Shows the average grade
console.log(averageGrade);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.

//Question no 58

function calculateAverageScore(...scores: number[]) {
  // Use the spread operator (...) to accept any number of scores
  const totalScore = scores.reduce((acc, score) => acc + score, 0); // Calculate total score
  const averageScore = totalScore / scores.length; // Calculate average

  // Handle cases where no scores are provided
  if (isNaN(averageScore)) {
    return "Please provide at least one score.";
  }

  return `The average score is: ${averageScore.toFixed(2)}`; // Round to two decimal places
}

// Example usage:
const scores = [85, 92, 78, 95]; // Provide any number of scores
const average = calculateAverageScore(...scores);

console.log(average); // Output: The average score is: 87.50

// Question no 59

// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number: number) => number {
  // This is the magic box. It takes a number and adds your special number to it
  return function (number: number): number {
    return number + valueToAdd;
  };
}

// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.

//Question no 60

// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "filza javaid";
    let age = 26;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();

// Asking the profile to tell us about the user
userProfile.displayInfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.


//Question no 61


// Define an enum named VehicleCategory
enum VehicleCategory {
    Car,
    Truck,
    Motorcycle,
  }
  
  // Example usage
  const myCar = {
    make: "Toyota",
    model: "Camry",
    category: VehicleCategory.Car, // Access enum member using dot notation
  };
  
  console.log(`My car is a ${myCar.category}`); // Output: My car is a Car

  //Question no 62

  // Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student
let student: Student = {
    name: "komal",
    age: 22,
    courses: ["Math", "Science", "History"]
};

// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.


//Question no 63

  // Creating a custom type (type alias) for shapes that could be circles or rectangles
type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};

// Describing a circle using our Shape type
let circle: Shape = {
    kind: "circle",
    radius: 5
};

// Describing a rectangle using our Shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.

//Question no 64

function mergeTextWithNumber(text: string, number: number): string {
    return text + number;
}

// Example usage:
const mergedText = mergeTextWithNumber("Age: ", 30);
console.log(mergedText); // Output: "Age: 30"

//Question no 65


function remainder(a: number, b: number): number {
    return a % b;
}

// Example usage:
console.log(remainder(5, 2)); // Output: 1

//Question no 66

function checkBothTrue(value1: boolean, value2: boolean): boolean {
    return value1 && value2;
}

// Example usage:
console.log(checkBothTrue(true, false)); // Output: false
console.log(checkBothTrue(true , true)); // OUTPUT: true
console.log(checkBothTrue(false , true)); // OUTPUT: false
console.log(checkBothTrue(false , false)); // OUTPUT: false

//Question no 67


// This function adds a number and a string that represents a number
function addNumberAndString(number1: number, numberString: string): number {
    // Converts the string to a number and adds it to the first number
    return number1 + Number(numberString);
}

// Trying it with 10 and "5"
console.log(addNumberAndString(10, "5")); // Shows 15
// The string "5" is turned into the number 5, and then added to 10.



//question no 68

// This function multiplies two decimal numbers
function multiplyDecimals(num1: number, num2: number): number {
    // Multiplies the numbers and rounds the result to two decimal places
    return Math.round((num1 * num2) * 100) / 100;
}

// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2)); // Shows 0.02
// After multiplying, we round to make the result easier to read.

//question no 69

// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(dividend: number, divisor: number): { quotient: number; remainder: number } {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    // Returns both in an object
    return { quotient, remainder };
}

// Trying it with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.