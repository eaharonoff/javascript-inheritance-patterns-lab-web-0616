function Point(x,y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return "(" + this.x + "," + this.y + ")";
}

function Shape() {}

Shape.prototype.addToPlane = function(x,y) {
  Shape.prototype.position = new Point(x,y);
}

Shape.prototype.move = function(x,y) {
  this.position = new Point(x,y);
}

function Side(s) {
  this.length = s; 
}

function Circle(r) {
  this.radius = r; 
}
//inherits from Shape prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

//extends Circle
Circle.prototype.diameter = function () {
  return this.diameter = this.radius * 2; 
}
// area of the Circle
Circle.prototype.area = function (){
  return Math.PI * this.radius^2; 
} 
//circumfrence of the Circle 
Circle.prototype.circumference = function (){
  return Math.PI * this.radius * 2; 
} 

function Polygon(sides) {
  // Shape.call(this)
  this.sides = sides; // an array of all its sides
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function() {
  return this.sides.length 
}

Polygon.prototype.perimeter = function() {
 var perim = 0;
  for(var i=0; i < this.numberOfSides(); i++) {
    perim+= this.sides[i].length 
  }
  return perim 
}

function Quadrilateral(sideOne, sideTwo, sideThree, sideFour) {
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree), new Side(sideFour)])
  this.sideOne = sideOne;
  this.sideTwo = sideTwo;
  this.sideThree = sideThree;
  this.sideFour = sideFour;
}

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;

function Rectangle(width, height) {
  Quadrilateral.call(this, width, width, height, height)
  this.width = width;
  this.height = height; 
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(sideLength) {
  Rectangle.call(this, sideLength,sideLength,sideLength,sideLength)
  this.sideLength = sideLength;
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square; 

Square.prototype.listProperties = function() {
  for (var prop in this){
    if(this.hasOwnProperty(prop)) {
    console.log(this + "." + prop + " = " + this[prop]);
  }
  }
}

function Triangle(oneSide, twoSide, threeSide) {
  Polygon.call(this, [new Side(oneSide), new Side(twoSide), new Side(threeSide)])
  this.oneSide = oneSide
  this.twoSide = twoSide
  this.threeSide = threeSide
}

Triangle.prototype = Object.create(Polygon.prototype)
