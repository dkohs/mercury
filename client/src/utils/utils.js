export const evaluateAge = (dobStr) => {
  // Convert the string to a Date object
  const dob = new Date(dobStr);

  // Get today's date
  const today = new Date();

  // Calculate the age
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  return age;
};

export const evaluateSex = (gender) => {
  if (gender.toLowerCase() === "female") {
    return 0;
  } else if (gender.toLowerCase() === "male") {
    return 1;
  } else {
    throw new Error("Invalid gender input. Please use 'Female' or 'Male'.");
  }
};

export const evaluateChestPain = (description) => {
  // Array of possible descriptions
  const descriptions = [
    "Mild (Score 1): Slight discomfort in the chest, barely noticeable and doesn't affect daily activities.",
    "Moderate (Score 2): Noticeable chest discomfort that is bothersome but manageable, with slight impact on daily activities.",
    "Severe (Score 3): Intense chest pain that interferes with daily activities, often radiating to other areas and causing distress.",
    "Very Severe (Score 4): Excruciating chest pain, debilitating and requires immediate medical attention due to the potential seriousness.",
  ];

  // Find the matching description in the array
  const match = descriptions.find((desc) => desc === description);

  if (match) {
    // Extract the score from the string using a regular expression
    const scoreMatch = match.match(/Score (\d+)/);
    if (scoreMatch) {
      return parseInt(scoreMatch[1], 10); // Convert the extracted score to a number
    } else {
      throw new Error("Score not found in description.");
    }
  } else {
    throw new Error("Description not found.");
  }
};

export const evaluateEA = (str) => {
    if (str.toLowerCase() === "true") {
        return 1;
    } else if (str.toLowerCase() === "false") {
        return 0;
    } else {
        throw new Error("Invalid input. Please use 'True' or 'False'.");
    }
}