#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

let  A = {
'USD' : {
 'PKR' :277.78,
 'JPY' : 151.42 ,
 'USD' : 1
},
'PKR':{
'PKR':1,
'USD':0.0036,
'JPY':0.5458
},
'JPY':{
'PKR' : 1.8308,
'USD': 0.006591,
'JPY' : 1
}
}

console.log(chalk.magenta(`| CURRENCY COVERTOR |`))

interface cc {
    first: 'JPY'|'PKR'|'USD'
    num : number
    second: 'JPY'|'PKR'|'USD'
}
let currency:cc= await inquirer.prompt ([{
    type : "list",
    name : "first",
    choices : ['JPY','PKR','USD']
},{
    type:"number",
    name:"num",
    message:chalk.magenta("ENTER AMOUNT")
},{ 
    type : "list",
    name : "second",
    choices:['JPY','PKR','USD']
}])


if(currency){
    let res = A[currency.first][currency.second] * currency.num
    console.log(chalk.red(res))
}