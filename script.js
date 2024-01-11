const { data } = require('./data/data');
const filterData = require('./methods/filterData');
const addCountToNames = require('./methods/addCountToNames');
const displayFilteredData = require('./methods/displayFilteredData');


const args = process.argv; 
const filterArg = args.find(arg => arg.startsWith('--filter='));

if (!filterArg) {
    console.error('how to use : node script.js --filter=<pattern>');
    process.exit(1);
}

const pattern = filterArg.split('=')[1];
console.log('PATTERN = ', pattern);

const filteredData = filterData(pattern, data);
const dataWithCount = addCountToNames(filteredData);

displayFilteredData(dataWithCount);