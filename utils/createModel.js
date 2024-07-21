const tf = require("@tensorflow/tfjs");

const createModel = () => {
  const model = tf.sequential();

  model.add(
    tf.layers.dense({ inputShape: [13], units: 50, activation: "relu" })
  );
  model.add(tf.layers.dense({ units: 50, activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

  model.compile({
    optimizer: tf.train.adam(),
    loss: "binaryCrossentropy",
    metrics: ["accuracy"],
  });

  return model;
};

module.exports = { createModel };
