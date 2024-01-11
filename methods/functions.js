function addCountToNames(data) {
    function processItem(item) {

        function processChild(child) {
            if (child.animals) {
                newName = `${child.name} [${child.animals.length}]`;
            }
            return { ...child, name: newName };
        }

        if (item.people) {
            item.people = item.people.map(processChild);
        }
        return { ...item, name: `${item.name} [${item.people.length}]` };
    }
    return data.map(processItem);
}



function filterData(pattern) {
    const filteredData = data.map(country => {
        const filteredPeople = country.people.map(person => {
            const filteredAnimals = person.animals.filter(animal =>
                animal.name.toLowerCase().includes(pattern.toLowerCase())
            );
            return { ...person, animals: filteredAnimals };
        }).filter(person => person.animals.length > 0);
        return { ...country, people: filteredPeople };
    }).filter(country => country.people.length > 0);

    return filteredData;
}

function displayFilteredData(filteredData) {
    console.log(JSON.stringify(filteredData,null,4));
}

module.exports={functionsJs}