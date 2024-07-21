const tf = require("@tensorflow/tfjs");

const trainModel = async (model, features, labels) => {
  return model.fit(features, labels, {
    batchSize: 32,
    epochs: 50,
    shuffle: true,
    validationSplit: 0.2,
  });
};

module.exports = { trainModel };
