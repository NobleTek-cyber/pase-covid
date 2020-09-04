const mongoose = require('mongoose');
const uri = 'mongodb+srv://Nobletek-cyber:nobletek@cluster0.jkmpx.gcp.mongodb.net/PaseCovid?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// const mongoDB = 'mongodb://localhost:27017/PaseCovid';
// mongoose.connect(mongoDB, { 
//     useUnifiedTopology: true,
//     useNewUrlParser: true
//  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const schema = mongoose.Schema({
    Country: String,
    Active: Number,
    Deaths: Number,
    Recoveries: Number,
    Confirmed: Number,
    Date: String
});

const Case = mongoose.model('Case', schema);

module.exports = mongoose.model('Case', schema);