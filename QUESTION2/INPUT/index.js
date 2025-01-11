function Person(name,age){
    this.name =name;
    this.age=age;
}
function Employee(name,age,designation){
    Person.call(this,name,age);
    this.designation=designation;
}

Employee.prototype.getDetails=function(){
    console.log(`Name :${this.name}, Age:${this.age}, Designation:${this.designation}`)
}

let emp=new Employee("abc",23,"Developer");
emp.getDetails();
