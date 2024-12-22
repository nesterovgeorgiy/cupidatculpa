// Define the Marks object with different types
const Marks = {
  math: 85,
  science: 92,
  history: 78,
  english: 88
};

// Function to get the mark for a specified type
function getMark(type) {
  // Access the mark for the given type
  const entry = Marks[type];

  // Check if the type exists in the Marks object
  if (entry !== undefined) {
    console.log(`The mark for ${type} is ${entry}.`);
  } else {
    console.log(`No mark found for the type: ${type}.`);
  }
}

// Example usage
getMark('math'); // Output: The mark for math is 85.
getMark('science'); // Output: The mark for science is 92.
getMark('geography'); // Output: No mark found for the type: geography.
