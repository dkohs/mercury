const { loadData } = require("./loadData");
const tf = require("@tensorflow/tfjs");

const runML = async (
  age,
  sex,
  chestPainType,
  bp,
  cholesterol,
  maxHR,
  exerciseAngina
) => {
  const data = await loadData();

  const featureNames = [
    "Age",
    "Sex",
    "ChestPainType",
    "BP",
    "Cholesterol",
    "MaxHR",
    "ExerciseAngina",
  ];
  const features = data.map((d) => featureNames.map((f) => d[f]));
  const labels = data.map((d) => d.HeartDisease);

  const featureTensor = tf.tensor2d(features);
  const labelTensor = tf.tensor2d(labels, [labels.length, 1]);

  // Normalize the data
  const { mean, variance } = tf.moments(featureTensor, 0);
  const normalizedFeatures = featureTensor.sub(mean).div(variance.sqrt());

  // Split the data
  const [trainFeatures, testFeatures] = tf.split(normalizedFeatures, 2);
  const [trainLabels, testLabels] = tf.split(labelTensor, 2);

  // Build the model
  const model = tf.sequential();
  model.add(
    tf.layers.dense({
      units: 64,
      activation: "relu",
      inputShape: [trainFeatures.shape[1]],
    })
  );
  model.add(tf.layers.dense({ units: 32, activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  // Compile the model
  model.compile({
    optimizer: tf.train.adam(),
    loss: "binaryCrossentropy",
    metrics: ["accuracy"],
  });

  // Train the model
  async function trainModel() {
    await model.fit(trainFeatures, trainLabels, {
      epochs: 50,
      batchSize: 32,
      validationSplit: 0.2,
      callbacks: tf.callbacks.earlyStopping({ monitor: "val_loss" }),
    });

    // Evaluate the model
    const evalResult = model.evaluate(testFeatures, testLabels);
    evalResult[1].print(); // Print test accuracy

    // Predict on new data
    const newUserInput = [
      age,
      sex,
      chestPainType,
      bp,
      cholesterol,
      maxHR,
      exerciseAngina,
    ]; // User input
    const newUserTensor = tf.tensor2d([newUserInput]);
    const normalizedNewUser = newUserTensor.sub(mean).div(variance.sqrt());
    const prediction = model.predict(normalizedNewUser);
    prediction.print(); // Print prediction result
  }

  trainModel();
};

module.exports = { runML };
