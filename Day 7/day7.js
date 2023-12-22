// Object constructors and methods
// Create a constructor `Rectangle` that takes `width` and `height` as parameters. 
//Add a method `calculateArea()` that calculates and returns the area of the rectangle.

// first attempt
let Rectangle = {
    calculateArea: function(width, height){
        return width * height;
    }
};
console.log("The area of the rectangle is:", Rectangle.calculateArea(5, 4));
// The area of the rectangle is: 20



// second attempt
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.calculateArea = function() {
        let area = this.width * this.height;
        return area;
    };
}
let myRectangle = new Rectangle(5, 6);

console.log("The area of the rectangle is:", myRectangle.calculateArea());

// The area of the rectangle is: 30










