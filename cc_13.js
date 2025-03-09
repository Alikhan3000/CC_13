//Task 2: Adding Employee Cards Dynamically

function buildEmployee(name, position){                 //created a function for an employee card 
    const employee = document.createElement("div");
    employee.setAttribute("class", "employeeid");       //set attributes using setAttribute for each element of the employee card

    const employeeName = document.createElement("h2");
    employeeName.setAttribute("class", "employeeid");
    employeeName.textContent = name;

    const employeePosition = document.createElement("p");
    employeePosition.setAttribute("class", "employeeid");
    employeePosition.textContent = position;

    const removeEmployee = document.createElement("button");
    removeEmployee.setAttribute("class", "employeeid")
    removeEmployee.textContent = "Remove Employee";
    removeEmployee.addEventListener("click", function(){    //used addEventListener in a function that removes the employee when clicked
        employee.remove()

    });

    //appended all the employee card elements (name, position, removeEmployee button)
    employee.appendChild(employeeName);                  
    employee.appendChild(employeePosition);
    employee.appendChild(removeEmployee);

    document.getElementById("employeeContainer").appendChild(employee);     //appened the employee card yo the "employeeContainer" using appendChild
}


//test data:
buildEmployee("Michael Kirkland", "Sales Associate");
buildEmployee("Antonio Lightweight", "HR Director");


// Task 3: Converting NodeLists to Arrays for Bulk Updates


//creted a function with document.querySelectorAll that selects all employees with the employee card class
function employeeSelect(){                          
    const employeeQSA = document.querySelectorAll(".employeeid");

    const employeeArray = [...employeeQSA];     //converted the NodeList into an array using the spread operator

    employeeArray.forEach(employee => {         //used .forEach to apply backgroung and padding changes for the employee card
        employee.style.background = "lightblue";
        employee.style.padding = "1px";
    });

}
employeeSelect(); //logged the function to see changes to the card


