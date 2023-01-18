//const inventory =require ('./test/data').inventory;

//import inventory from "./test/data";


/*
module.exports = {
    problem1 : function(inventory,n)
    {
        if(inventory.length==0)
        return [];
        else{
        for(let i=0;i<inventory.length;i++)
         {
            if(inventory[i].id==n)
            {
                return (inventory[i]);
            }
        }
    }
    }
}

 */
function problem1 (inventory,n)
{
    if(inventory.length==0)
    return [];
    else{
    for(var i=0;i<inventory.length;i++)
         {
            if(inventory[i].id==n)
            {
                return (inventory[i]);
            }
        }
    }
}
export {problem1};


