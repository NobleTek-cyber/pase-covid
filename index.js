const express = require('express');
// const mongoose = require('mongoose');
const reader = require('./reader');
const countries = require('./countries');
const Case = require('./database');
require('./runner');
const app = express();

const url = `https://raw.githubusercontent.com/dougymenns/covid-data/master/covid%2019%20data.csv`;
     

// mongoose.connect('mongodb://localhost:27017', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

app.get('/', (req, res) => {
    const country = req.query.country;
    const date = req.query.date;

    if (country && date) {
        Case.where({Country: country, Date: date}, (err, docs) => {
            if (err) {
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });
    } else if (country) {
        Case.where({Country: country}, (err, docs) => {
            if (err) {
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });
    
    } else if(date) {
        Case.where({Date: date}, (err, docs) => {
            if (err) {
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });
    } else {
        Case.find((err, docs) => {
            if (err) {
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });
    }
});


app.listen(8000, () => {
    console.log('Server up and running...');
});