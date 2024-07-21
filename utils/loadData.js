const csv = require("csv-parser");
const fs = require("fs");

const loadData = () => {
  const data = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream("cardiovascular.csv")
      .pipe(csv())
      .on("data", (row) => {
        data.push({
          Age: parseFloat(row.age),
          Sex: parseInt(row.sex),
          ChestPainType: parseInt(row.chest_pain_type),
          BP: parseInt(row.bp),
          FBSOver120: parseInt(row.fbs_over_120),
          EKGResults: parseInt(row.ekg_results),
          MaxHR: parseInt(row.max_hr),
          ExerciseAngina: parseInt(row.exercise_angina),
          STDepression: parseInt(row.st_depression),
          SlopeOfST: parseInt(row.slope_of_st),
          VesselsFluro: parseInt(row.number_of_vessels_fluro),
          Thallium: parseInt(row.thallium),
          HeartDisease: parseInt(row.heart_disease),
        });
      })
      .on("end", () => {
        resolve(data);
      });
  });
};

module.exports = { loadData };
