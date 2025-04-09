/*
Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand],
Model: [model]". Test the method using this keyword.
*/
// Create the car object
let car = {
    brand: "Toyota",
    model: "Corolla",
  
    // Method to display details
    displayDetails: function() {
      console.log("Brand: " + this.brand);
      console.log("Model: " + this.model);
    }
  };
  
  // Test the method
  car.displayDetails();
  