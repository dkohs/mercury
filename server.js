const tf = require("@tensorflow/tfjs");

const { loadData } = require("./utils/loadData");
const { convertTensor } = require("./utils/convertTensor");
const { createModel } = require("./utils/createModel");
const { trainModel } = require("./utils/trainModel");

const runML = async () => {
  const data = await loadData();

  const tensor = convertTensor(data);

  const { features, labels, featureMax, featureMin, labelMax, labelMin } =
    tensor;

  const [trainFeatures, testFeatures] = tf.split(features, 2);
  const [trainLabels, testLabels] = tf.split(labels, 2);

  const model = createModel();
  await trainModel(model, trainFeatures, trainLabels);

  // Evaluate the model
  const evalResult = model.evaluate(testFeatures, testLabels);
  console.log("Evaluation result:", evalResult);

  // Perform predictions
  const predictions = model.predict(testFeatures);
  predictions.print();

  //   res.send("File processed, model trained, and predictions made!");
};

runML();
