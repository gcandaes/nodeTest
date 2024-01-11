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

module.exports=addCountToNames