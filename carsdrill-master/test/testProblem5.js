import {problem4} from '../problem4.js'
import {problem5} from '../problem5.js'
import { inventory } from './data.js';
//const problem4 =require ('../problem4').problem4;
//const problem5 =require ('../problem5').problem5;
//const inventory =require ('./data');

var res=problem4(inventory);
var result=problem5(res,2000);
console.log(result);