// car
class Car{
    constructor(name,price,md,color){
        this.name=name;
        this.price=price;
        this.md=md;
        this.color=color;
        console.log(this);
    }
}
const Car1=new Car ("mustang gt",8000000,2023,"black");

//employee
class Employee{
    constructor(name,designation,age,gender,salary){
        this.name=name;
        this.designation=designation;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
        console.log(this);
    }
}
const Employee1=new Employee("umeshraja","engineer",22,"male",500000);

//computer
class Computer{
    constructor(name,ram,rom,windows,color,price,warrenty){
        this.name=name;
        this.ram=ram;
        this.rom=rom;
        this.windows=windows;
        this.color=color;
        this.price=price;
        this.warrent=warrenty;
        console.log(this);
    }
}
const Computer1=new Computer("lenova","4gb","256ssd","11","black","65000","2years");

//remote
class Remote{
    constructor(receptionrange,batteries){
        this.receptionrange=receptionrange;
        this.batteries=batteries;
        console.log(this);
    }
}
const Remote1=new Remote("19.7 feet(6m)", "Two alkaline or manganese AA");

//person
class Person{
    constructor(name,age,color,height){
      this.name=name;
      this.age=age;
      this.color=color;
      this.height=height;
      console.log(this)  
    }
}
const Person1=new Person("umeshraja",22,"white","6feet",)

