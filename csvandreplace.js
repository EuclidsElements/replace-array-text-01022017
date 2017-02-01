


var fs = require('fs');
var $ = jQuery = require('jQuery');
require('./jquery.csv.js');


//load the csv file of the text we want to edit
var incorrectArray1 = [];
var input1 = 'inputarray.csv';
var csv1 = fs.readFileSync(input1, 'UTF-8');
$.csv.toArrays(csv1, {}, function(err, data) {
  for(var i=0, len=data.length; i<len; i++) {
    // console.log(data[i]);
    incorrectArray1.push(data[i]);
  }
});

console.log(incorrectArray1);

//load the csv file of the text we want identified in the text to be edited
var dataChoose = [];
var input2 = 'inputarray2.csv';
var csv2 = fs.readFileSync(input2, 'UTF-8');
$.csv.toArrays(csv2, {}, function(err, data) {
  for(var i=0, len=data.length; i<len; i++) {
    // console.log(data[i]);
    dataChoose.push(data[i]);
  }
});
console.log(dataChoose)
//load the csv file of the text we want to use to replace the identified text
var dataReplace = [];
var input3 = 'inputarray3.csv';
var csv3 = fs.readFileSync(input3, 'UTF-8');
$.csv.toArrays(csv3, {}, function(err, data) {
  for(var i=0, len=data.length; i<len; i++) {
    // console.log(data[i]);
    dataReplace.push(data[i]);
  }
});
console.log(dataReplace)


correctedArray1 =
    incorrectArray1.map(function(array4){
      return array4.map(function(ele){
               dataChoose.forEach(function(choose){
                 ele = ele.replace(new RegExp(choose, 'g'),  dataReplace[dataChoose.indexOf(choose)]) ;
               })
               return ele;
             })
    });

    console.log(correctedArray1)
