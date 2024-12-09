/*let length = 1;
let width = 3;
let base = 2;
let height = 5;
let radius = 4;

let rectangle = 1 * 3;
let triangle = 1/2 * 2 * 5;
let circle = 3.14 * 4 * 2;*/


function area(shape, measure1, measure2){
    if(shape === "rectangle"){
        return measure1 * measure2;
    } else if(shape === "triangle"){
        return 0.5 * measure1 * measure2;
    } else if(shape === "circle"){
        return Math.PI * measure1 * measure2;
    }else{
        "Shape not recognized";
    }
}

console.log(area("rectangle", 10, 5));
console.log(area("triangle", 10, 5));
console.log(area("circle", 10, 5));