const personRovshen = {
  firstname: "Rovshan",
  lastname: "Khalilov",
  salary: 200,
};

const personElnur = {
  firstname: "Elnur",
  lastname: "Azizov",
  salary: 170,
};

const personAli = {
  firstname: "Ali",
  lastname: "Huseyn",
  salary: 130,
};
const personCeyhun = {
  firstname: "Ceyhun",
  lastname: "Ceyhunov",
  salary: 100,
};
const employees = [personRovshen, personElnur, personCeyhun, personAli];
function Calculation(employees) {
  let sum = 0;
  let avg;
  employees.forEach(function (employee, index, employees) {
    console.log(employee);
    sum += employee.salary;
    avg = sum / employees.length;
  });
  console.log("The average of all employes: " + avg);
}

Calculation(employees);
