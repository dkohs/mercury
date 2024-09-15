const csv = require("csv-parser");
const fs = require("fs");

const loadData = () => {
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream("../../data/cardiovascular.csv")
      .pipe(csv())
      .on("data", (row) => {
        data.push({
          Age: parseFloat(row.age),
          Sex: parseInt(row.sex),
          ChestPainType: parseInt(row.chest_pain_type),
          BP: parseInt(row.bp),
          Cholesterol: parseInt(row.cholesterol), // Corrected from 'Colesterol' to 'Cholesterol'
          MaxHR: parseInt(row.max_hr),
          ExerciseAngina: parseInt(row.exercise_angina),
          HeartDisease: parseInt(row.heart_disease),
        });
      })
      .on("end", () => {
        resolve(data);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
};

module.exports = { loadData };
