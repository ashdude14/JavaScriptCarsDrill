// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. 
//Execute a function to Sort all the car model names into alphabetical order and 
function problem3(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

//module.exports.problem3=problem3;
export{problem3};