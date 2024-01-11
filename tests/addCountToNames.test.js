const addCountToNames = require('../methods/addCountToNames');
//const functionsJs = require('./functionsJs.js');

const { dataTest } = require('../data/dataTest');

const result = addCountToNames(dataTest);
//const result = functionsJs.addCountToNames(dataTest);


it('addCountToNames() check if add the right number at the right place', () => {
    expect(result[0]).toHaveProperty('name', 'Dillauti [5]'); 
    //expect(result.some(item => item.name === 'Dillauti [5]')).toBe(true);
});


it('addCountToNames() check if the order is still the same for the countries name', () => {
    expect(result[0]).toHaveProperty('name',); 
    expect(result[1]).toHaveProperty('name', 'Tohabdal [4]'); 
})

it('addCountToNames() check if the order is still the same for the people name', () => {
    expect(result[0].people[0]).toHaveProperty('name', 'Winifred Graham [6]');
    expect(result[0].people[1]).toHaveProperty('name', 'Blanche Viciani [8]');
    expect(result[0].people[2]).toHaveProperty('name', 'Philip Murray [7]');
    expect(result[0].people[3]).toHaveProperty('name', 'Bobby Ristori [9]');
    expect(result[0].people[4]).toHaveProperty('name', 'Louise Pinzauti [5]');
})

it('addCountToNames() check if the order is still the same for the animals name', () => {
    expect(result[0].people[0].animals[0]).toHaveProperty('name', 'Anoa');
    expect(result[0].people[0].animals[1]).toHaveProperty('name', 'Duck');
    expect(result[0].people[0].animals[2]).toHaveProperty('name', 'Narwhal');
    expect(result[0].people[0].animals[3]).toHaveProperty('name', 'Badger');
    expect(result[0].people[0].animals[4]).toHaveProperty('name', 'Cobra');
    expect(result[0].people[0].animals[5]).toHaveProperty('name', 'Crow');
})
