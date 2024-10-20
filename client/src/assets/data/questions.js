export const questions = [
    { id: "Age", question: "What is your Date of Birth?", type: "date" },
    {
      id: "Sex",
      question: "What is your sex?",
      type: "multiple-choice",
      options: ["Female", "Male"],
    },
    {
      id: "ChestPainType",
      question: "How would you describe your chest pain?",
      type: "multiple-choice",
      options: [
        "Mild (Score 1): Slight discomfort in the chest, barely noticeable and doesn't affect daily activities.",
        "Moderate (Score 2): Noticeable chest discomfort that is bothersome but manageable, with slight impact on daily activities.",
        "Severe (Score 3): Intense chest pain that interferes with daily activities, often radiating to other areas and causing distress.",
        "Very Severe (Score 4): Excruciating chest pain, debilitating and requires immediate medical attention due to the potential seriousness.",
      ],
    },
    { id: "BP", question: "What is your blood pressure?", type: "number" },
    {
      id: "Cholesterol",
      question: "What is your cholesterol levels",
      type: "number",
    },
    { id: "MaxHR", question: "What is your max heart rate?", type: "number" },
    {
      id: "ExerciseAngina",
      question:
        "Do you have chest pain or discomfort that occurs during exercise?",
      type: "multiple-choice",
      options: ["True", "False"],
    },
  ];