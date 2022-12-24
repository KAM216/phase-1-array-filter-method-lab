function matchName(drivers,name){
    return drivers.filter((drivers) => drivers.name === name);
}

function findMatching(drivers,name){
    return drivers.filter((maybe) => maybe.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers,name){
    return drivers.filter((maybe)=> maybe.indexOf(name) === 0);
}