const tf = require("@tensorflow/tfjs");

const { loadData } = require("./utils/loadData");
const { convertTensor } = require("./utils/convertTensor");
const { createModel } = require("./utils/createModel");
const { trainModel } = require("./utils/trainModel");

const runML = async () => {
  const data = await loadData();

  // Convert data to tensors
  const featureNames = [
    "Age",
    "Sex",
    "ChestPainType",
    "BP",
    "FBSOver120",
    "EKGResults",
    "MaxHR",
    "ExerciseAngina",
    "STDepression",
    "SlopeOfST",
    "VesselsFluro",
    "Thallium",
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
    const newUserInput = [47, 1, 4, 110, 0, 2, 118, 1, 1, 2, 1, 3]; // User input
    const newUserTensor = tf.tensor2d([newUserInput]);
    const normalizedNewUser = newUserTensor.sub(mean).div(variance.sqrt());
    const prediction = model.predict(normalizedNewUser);
    prediction.print(); // Print prediction result
  }

  trainModel();
};

runML();
