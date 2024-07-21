const tf = require("@tensorflow/tfjs");

const convertTensor = (data) => {
  return tf.tidy(() => {
    tf.util.shuffle(data);

    const inputs = data.map((d) => [
      d.Age,
      d.Sex,
      d.ChestPainType,
      d.BP,
      d.Cholesterol,
      d.FBSOver120,
      d.EKGResults,
      d.MaxHR,
      d.ExerciseAngina,
      d.STDepression,
      d.SlopeOfST,
      d.VesselsFluro,
      d.Thallium,
    ]);
    const labels = data.map((d) => d.HeartDisease);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, inputs[0].length]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor
      .sub(inputMin)
      .div(inputMax.sub(inputMin));
    const normalizedLabels = labelTensor
      .sub(labelMin)
      .div(labelMax.sub(labelMin));

    return {
      features: normalizedInputs,
      labels: normalizedLabels,
      featureMax: inputMax,
      featureMin: inputMin,
      labelMax: labelMax,
      labelMin: labelMin,
    };
  });
};

module.exports = { convertTensor };
