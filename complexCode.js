/* complexCode.js */

// This code demonstrates a complex implementation of an employee management system.
// It includes functionality such as adding, editing, and deleting employees, as well as providing statistical data.

class Employee {
  constructor(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }
}

class EmployeeManagementSystem {
  constructor() {
    this.employees = [];
    this.statistics = {
      highestSalary: 0,
      averageAge: 0
    };
  }

  addEmployee(name, age, position, salary) {
    const employee = new Employee(name, age, position, salary);
    this.employees.push(employee);
    this.updateStatistics();
  }

  editEmployee(name, newName, newAge, newPosition, newSalary) {
    const employee = this.findEmployeeByName(name);
    if (employee) {
      employee.name = newName;
      employee.age = newAge;
      employee.position = newPosition;
      employee.salary = newSalary;
      this.updateStatistics();
    }
  }

  deleteEmployee(name) {
    const index = this.findEmployeeIndexByName(name);
    if (index !== -1) {
      this.employees.splice(index, 1);
      this.updateStatistics();
    }
  }

  findEmployeeByName(name) {
    return this.employees.find(employee => employee.name === name);
  }

  findEmployeeIndexByName(name) {
    return this.employees.findIndex(employee => employee.name === name);
  }

  updateStatistics() {
    let totalSalary = 0;

    this.employees.forEach(employee => {
      if (employee.salary > this.statistics.highestSalary) {
        this.statistics.highestSalary = employee.salary;
      }
      totalSalary += employee.salary;
    });

    this.statistics.averageAge = this.getAverageAge();
  }

  getAverageAge() {
    if (this.employees.length === 0) {
      return 0;
    }
    const totalAge = this.employees.reduce((sum, employee) => sum + employee.age, 0);
    return totalAge / this.employees.length;
  }
}

// Usage

const ems = new EmployeeManagementSystem();

ems.addEmployee("John Doe", 32, "Manager", 5000);
ems.addEmployee("Jane Smith", 28, "Developer", 4000);
ems.addEmployee("Michael Johnson", 36, "Designer", 4500);

console.log("Initial Employee List:");
console.log(ems.employees);

console.log("\nHighest Salary:", ems.statistics.highestSalary);
console.log("Average Age:", ems.statistics.averageAge);

ems.editEmployee("Jane Smith", "Jane Brown", 29, "Senior Developer", 4500);

console.log("\nEdited Employee List:");
console.log(ems.employees);

console.log("\nHighest Salary:", ems.statistics.highestSalary);
console.log("Average Age:", ems.statistics.averageAge);

ems.deleteEmployee("John Doe");

console.log("\nFinal Employee List:");
console.log(ems.employees);

console.log("\nHighest Salary:", ems.statistics.highestSalary);
console.log("Average Age:", ems.statistics.averageAge);
