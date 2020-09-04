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
     const url = 
    `https://raw.githubusercontent.com/CSSEGISandData/Covid-19/master/csse_covid_19_daily_reports/05-${day}-2020.csv`; 
// `https://raw.githubusercontent.com/dougymenns/covid-data/master/covid%2019%20data.csv`;
    //  console.log(url);
    reader(url, countries, Case);
 }