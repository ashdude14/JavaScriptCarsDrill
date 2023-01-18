
import { problem3 } from "../problem3.js";
import {inventory}  from './data.js'
//const problem3 =require ('../problem3').problem3;
//const inventory =require ('./data');
//console.log(inventory.length);
var result=inventory.sort(problem3("car_model"));

console.log(result);
