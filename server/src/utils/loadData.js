const csv = require("csv-parser");
const fs = require("fs");
const path = require("path")

const loadData = () => {
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname,"../data/cardiovascular.csv"))
      .pipe(csv())
      .on("data", (row) => {
        data.push({
          Age: parseFloat(row.age),
          Sex: parseInt(row.sex),
          ChestPainType: parseInt(row.chest_pain_type),
          BP: parseInt(row.bp),
          Cholesterol: parseInt(row.cholesterol),
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
