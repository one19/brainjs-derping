let trainedNet;

const encode = inputString => {
  return inputString.split('').map(x => (x.charCodeAt(0) / 255));
}

const processTrainingData = data => {
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    }
  })
}

const train = (data) => {
  let net = new brain.NeuralNetwork();
  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
  console.log('Finished training...');
};

const execute = (input) => {
  let results = trainedNet(encode(input));
  console.log('results', results)
  let output;
  results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
  return output;
}

train(trainingData);
console.log(execute('henlo widget! this is teh bombz'));
