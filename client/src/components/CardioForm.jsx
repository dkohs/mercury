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
import {
  evaluateAge,
  evaluateSex,
  evaluateChestPain,
  evaluateEA,
} from "../utils/utils";
import axios from "axios";

export const CardioForm = () => {
  const questions = [
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [prediction, setPrediction] = useState(null);

  const handleNext = (event) => {
    event.preventDefault();

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataPayload = {
      age: evaluateAge(answers.Age),
      sex: evaluateSex(answers.Sex),
      chestPainType: evaluateChestPain(answers.ChestPainType),
      bp: parseFloat(answers.BP),
      cholesterol: parseFloat(answers.Cholesterol),
      maxHR: parseFloat(answers.MaxHR),
      exerciseAngina: evaluateEA(answers.ExerciseAngina),
    };

    console.log("Submitted dataPayload:", dataPayload);

    try {
      const response = await axios.post("/prediction", dataPayload);
      console.log("Response:", response.data.prediction);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const renderPrediction = () => {
    if (prediction <= 0) {
      return null;
    }

    let interpretedPrediction = "";
    let color = "#000000";

    if (prediction > 0.9) {
      interpretedPrediction = "Highly Likely for Cardiovascular Disease";
      color = "red"
    } else if (prediction > 0.7) {
      interpretedPrediction =
        "Moderate to High Risk for Cardiovascular Disease";
        color = "orangered"
    } else if (prediction > 0.5) {
      interpretedPrediction = "Moderate Risk for Cardiovascular Disease";
      color = "orange"
    } else if (prediction > 0.3) {
      interpretedPrediction = "Low to Moderate Risk for Cardiovascular Disease";
      color = "greenyellow"
    } else if (prediction > 0.1) {
      interpretedPrediction = "Low Risk for Cardiovascular Disease";
      color = "lightgreen"
    } else {
      interpretedPrediction = "Very Low Risk for Cardiovascular Disease";
      color ="green"
    }

    return (
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" , height: "100%"}}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "700", color: color }}
        >
          {interpretedPrediction}
        </Typography>
      </Box>
    );
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
      {prediction > 0 ? (
        renderPrediction()
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            mt: 2,
            margin: "32px",
            height: "100%",
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
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  )
                )}
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
              <Button type="button" variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
