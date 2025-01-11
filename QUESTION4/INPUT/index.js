//Base class
class shape{
    draw(){
        console.log("Drawing a shape");
    }
}

//subclass circle 
class circle extends shape{
    draw(){
        console.log("Drawing a circle");
    }
}

//subclass rectangle
class rectangle extends shape{
    draw(){
        console.log("Drawing a rectangle");
    }
}

//Polymorphism
let shape1 = new shape();
shape1.draw();

let circle1=new circle();
circle1.draw();

let rectangle1 = new rectangle();
rectangle1.draw();