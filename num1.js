var x = 100 / "Apple";
console.log(isNaN(x));

var x = NaN;
var y = 5;
var z = x + y;
console.log(z);

var myNumber = 2;
var txt = "";
while (myNumber != Infinity) {   // Execute until Infinity
  myNumber = myNumber * myNumber +" \n";
  txt= txt + myNumber ;
}
console.log(txt);

var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23
console.log(x);

var x = 9.656;
x.toExponential(2);     // returns 9.66e+0
x.toExponential(4);     // returns 9.6560e+0
x.toExponential(6);
console.log(x);
