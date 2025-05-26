class Car{
    constructor(name, brand, year){
        this.name = name;
        this.brand = brand;
        this.year = year;
    }
    age(x){
        
        return x - this.year;
    }        
}   

const myCar = new Car("mustang", "ford", 2014);
const yourCar = new Car("자전거", "3천리", 2000);

const date = new Date();
let year = date.getFullYear();


document.getElementById("in").innerHTML = "내가 산 차는 " + myCar.age(year) + "년 지났어요" + "<br>";