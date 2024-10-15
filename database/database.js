const mongoose = require('mongoose');

exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aleksandar:YRzFP7MITu4YfYZo@cluster0.dle0u6v.mongodb.net/test-databaza?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('Successfully connected to databaswe');
  } catch (err) {
    console.log(err);
  }
};
