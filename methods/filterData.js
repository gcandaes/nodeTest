function filterData(pattern, data) {
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

module.exports=filterData