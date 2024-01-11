function addCountToNames(data) {
    //console.log('data : ', data);
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
   // console.log(data);
    return data.map(processItem);
}

module.exports=addCountToNames