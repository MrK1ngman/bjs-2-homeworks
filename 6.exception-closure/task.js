function parseCount(value){
    let result = Number.parseFloat(value);
    if(Number.isNaN(result)){
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value){ 
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if((a + b <= c) || (a + c <= b) || (c + b <= a)){
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    get area() {
        let p = this.perimeter * 0.5;
        let area = Number(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
        return area;
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch(error){
        let triangle = {};
        triangle.perimeter = function() {
            return "Ошибка! Треугольник не существует";
        }
        triangle.area = function() {
            return "Ошибка! Треугольник не существует";
        }
        return triangle;
    }
}
