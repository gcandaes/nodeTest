const filterData = require('../methods/filterData');
const { dataTest } = require('../data/dataTest');
const { data } = require('../data/dataTest');
const resultFilterRy = filterData("ry",dataTest);
const resultFilterBi = filterData("bi",dataTest);
const resultFilterCa = filterData("ca",dataTest);


it('should filter the data and get object with length = 0', () => {
    expect(resultFilterRy.length).toBe(0);
})

it('should filter the data and get object with length = 1', () => {
    expect(resultFilterBi[0].people[0].animals.length).toBe(1);
})

it('should respect the initial order', () => {
    expect(resultFilterCa[0].people[0].animals[0]).toHaveProperty('name', 'Caecilian');
    expect(resultFilterCa[0].people[0].animals[1]).toHaveProperty('name', 'Sand Cat');
    expect(resultFilterCa[1].people[0].animals[0]).toHaveProperty('name', 'African Wild Ass');
    expect(resultFilterCa[1].people[1].animals[0]).toHaveProperty('name', 'African Wild Dog');
    expect(resultFilterCa[1].people[2].animals[0]).toHaveProperty('name', 'Sand Cat');
})