
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. 
//Execute a function that will return an array from the dealer data containing 
//only the car years and log the result in the console as it was returned.

/*
module.exports = {
    problem4 : function(inventory)
    {
          let tempArr=[];
        for(var i=0;i<inventory.length;i++)
         {
                tempArr[i]=(inventory[i].car_year);
        }
        return (tempArr);
    }
}
*/

function problem4(inventory)
{
    let tempArr=[];
    for(var i=0;i<inventory.length;i++)
     {
            tempArr[i]=(inventory[i].car_year);
    }
    return (tempArr);

}

export {problem4};
