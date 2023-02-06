// 2.7 Step 1:
// Create a script that first puts the employee and sale examples
// into objects by using inbuilt functions or creating the objects from scratch.

const employee1 = {
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
}

const sale1 = {
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"01-09-2022"
}

// 2.7 Step 2:
// Create functions that output a formatted version of
// the information for the employee and sale

function employeeInfo(employee){
    return `Employee Information:\n;
    Name: ${employee.firstName} ${employee.lastName}\n;
    Staff ID: ${employee.id}\n
    Age and Gender: ${employee.age}, ${employee.gender}\n
    Position: ${employee.position}`;
}

function saleInfo(sale){
    return `Sale Information:\n;
    Staff ID: ${sale.staffId}\n;
    Item: ${sale.item}\n;
    Price: ${sale.price}\n;
    Date: ${sale.date}`;
}

// 2.7 Step 3:
// Create a constructor for these two object types to make it
// easier to define new employees and sales in future. 
// Example data to use with the constructors:
// 1. The employee shown above sold a second 
//    Wi-Fi Adapter two days after their first sale
// 2. The store also has a female salesperson named
//    Mary Sue, who is 32 years olf.

function employee(firstName, lastName, gender, age, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.position = position;
}

function sale(staffId, item, price, date){
    this.staffId = staffId;
    this.item = item;
    this.price = price;
    this.date = date;
}

// Object 1

const sale2 = {
    staffId:1,
    item: "Wi-Fi Adapter",
    price: 40.00,
    date: "03-09-2022"
}

// Object 2

const employee2 = {
    id: 1,
    firstName: "Mary",
    lastName: "Sue",
    gender: "Female",
    position: "Salesperson"
}

// 2.7 Step 4:
// Make an array each for the two types of objects you have with the 
// original objects and the above objects you created in the array

const employees = [employee1, employee2]
const sales = [sale1, sale2]

// 2.7 Bonus:
// 1. When creating a constructor for these objects, add the function
//    for displaying employee and sale information as a method

employees.displayEmployeeInfo = function(){
    return `Employee Information:\n;
    Name: ${this.firstName} ${this.lastName}\n;
    Staff ID: ${this.id}\n
    Age and Gender: ${this.age}, ${this.gender}\n
    Position: ${this.position}`;
}

sales.displaySalesInfo = function(){
    return `Sale Information:\n;
    Staff ID: ${this.staffId}\n;
    Item: ${this.item}\n;
    Price: ${this.price}\n;
    Date: ${this.date}`;
}

console.log(employees.displayEmployeeInfo());
console.log(sales.displaySalesInfo())

// 2. Using toString() on one of these custom objects does not produce
//    useful output. Modify the objects so they do have a useful toString method.



// 3. Use JS built in functions to convert the date string in the sales object
//    and get that dates day of the week.