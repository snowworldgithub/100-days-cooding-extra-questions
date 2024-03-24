// question 49 
function logHobbies(...hobbies: string[]): void {
    hobbies.forEach(hobby => {
        console.log(`i love doing ${hobby}.`);
    });
}

// Example usage:
logHobbies('reading', 'cooking', 'coding', 'painting','teaching');
