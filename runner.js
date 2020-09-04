const moment = require('moment');
const reader = require('./reader');
const Case = require('./database');
const countries = require('./countries');


const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const date = (moment(yesterday).format('MM-DD-YYYY'));


const url = `https://raw.githubusercontent.com/dougymenns/covid-data/master/covid%2019%20data/${date}.csv`;
    

const getUpdtate = async function () {
    reader(url, countries, Case);
};

getUpdtate().catch(console.log);

const hours = 24;
const interval = hours * 3600000;

setInterval(function () {
    getUpdtate().catch(console.log);
},  interval);