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




