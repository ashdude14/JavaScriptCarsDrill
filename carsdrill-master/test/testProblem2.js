//const problem1 =require ('../problem1').problem1;
import {inventory} from './data.js';
import {problem2} from '../problem2.js';
//const inventory =require ('./data');
//console.log(inventory.length);
var result=problem2(inventory);
console.log(`Last car is a ${result.car_make}  ${result.car_model}`);
//console.log(inventory);


