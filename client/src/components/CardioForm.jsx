import React, { useState } from "react";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Box,
  Typography,
} from "@mui/material";

export const CardioForm = () => {
  const questions = [
    { id: 1, question: "What is your Date of Birth?", type: "date" },
    {
      id: 2,
      question: "How would you describe your chest pain?",
      type: "multiple-choice",
      options: [
        "Mild (Score 1): Slight discomfort in the chest, barely noticeable and doesn't affect daily activities.",
        "Moderate (Score 2): Noticeable chest discomfort that is bothersome but manageable, with slight impact on daily activities.",
        "Severe (Score 3): Intense chest pain that interferes with daily activities, often radiating to other areas and causing distress.",
        "Very Severe (Score 4): Excruciating chest pain, debilitating and requires immediate medical attention due to the potential seriousness.",
      ],
    },
    { id: 3, question: "What is your blood pressure?", type: "number" },
    { id: 4, question: "What is your cholesterol levels", type: "number" },
    { id: 5, question: "What is your max heart rate?", type: "number" },
    {
      id: 6,
      question:
        "Do you have chest pain or discomfort that occurs during exercise?",
      type: "multiple choice",
      options: ["True", "False"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleChange = (event) => {
    setAnswers({
      ...answers,
      [questions[currentQuestionIndex].id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Answers:", answers);
    // You can perform any further actions here like sending data to a server
  };

  return (
    <Box
      sx={{
        margin: "32px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom>
          {`Cardiovascular Disease Probability Evaluation`}
        </Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          mt: 2,
          margin: "32px",
          height: "100%"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography variant="h6">
            {questions[currentQuestionIndex].question}
          </Typography>
          {questions[currentQuestionIndex].type === "multiple-choice" ? (
            <RadioGroup
              sx={{ mt: 2 }}
              value={answers[questions[currentQuestionIndex].id] || ""}
              onChange={handleChange}
            >
              {questions[currentQuestionIndex].options.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          ) : (
            <TextField
              fullWidth
              sx={{ mt: 2 }}
              type={questions[currentQuestionIndex].type}
              value={answers[questions[currentQuestionIndex].id] || ""}
              onChange={handleChange}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex === questions.length - 1 ? (
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          ) : (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
