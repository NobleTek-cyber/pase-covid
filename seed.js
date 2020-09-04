const Case = require('./database');
const reader = require('./reader');
const countries = require('./countries');

 for (let index = 1; index < 12; index++) {
     let day;
    //  console.log(index);
     if (index < 10) {
         day = '0' + index;
     } else {
         day = index
     }
     const url = `https://raw.githubusercontent.com/dougymenns/covid-data/master/covid%2019%20data.csv`;

    reader(url, countries, Case);
 }