//const problem1 =require ('../problem1').problem1;
import {inventory} from './data.js';
import {problem1} from '../problem1.js';
//const inventory =require ('./data');
//console.log(inventory.length);
var result=problem1(inventory,33);
console.log(`Car 33 is a  ${result.car_year} ${result.car_make} ${result.car_model}`);
//console.log(inventory);