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

    //Task 4: Implementing Removal of Employee Cards with Event Bubbling
    const removeEmployee = document.createElement("button");
    removeEmployee.setAttribute("class", "employeeid")
    removeEmployee.textContent = "Remove Employee";
    removeEmployee.addEventListener("click", function(event){   //used addEventListener in a function that removes the employee when clicked
        event.stopPropagation();                                //stopPropagation() prevents the event from bubbling up to the container
        employeeContainer.removeChild(employee);                //removeChild removes parent employee card 
        console.log(`Employee: ${name} was removed`);       //logged the message when an employee is removed
    });

    employee.addEventListener("dblclick", function(){           //added a double-click event listener to each employee card
        editEmployee(employee, employeeName, employeePosition);
    });


    //click event when the anything else is clicked on the employee card 
    document.getElementById("employeeContainer").addEventListener("click", function(event){     
        console.log("You clicked an employee card")
    });

    //appended all the employee card elements (name, position, removeEmployee button)
    employee.appendChild(employeeName);                  
    employee.appendChild(employeePosition);
    employee.appendChild(removeEmployee);

    document.getElementById("employeeContainer").appendChild(employee);     //appened the employee card yo the "employeeContainer" using appendChild
};


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

//Task 5: Inline Editing of Employee Details

function editEmployee(employeeQSA, employeeName, employeePosition){
    
    const inputName = document.createElement("input");  //replaces static content with input fields
    inputName.setAttribute("type", "text");
    inputName.setAttribute("class", "input-name");
    inputName.value = employeeName.textContent;

    const inputPosition = document.createElement("input");
    inputPosition.setAttribute("type", "text");
    inputPosition.setAttribute("class", "input-position");
    inputPosition.value = employeePosition.textContent;

    employeeName.parentNode.replaceChild(inputName, employeeName);
    employeePosition.parentNode.replaceChild(inputPosition, employeePosition);
      
    inputName.addEventListener("keypress", function(event){         //presses enter is pressed new data is saved 
        if(event.key === "Enter"){
            newinput();
        }
    })

    inputPosition.addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            newinput();
        }
    })

    //function replaces and saves new inputs
    function newinput(){                    
        employeeName.textContent = inputName.value;
        employeePosition.textContent = inputPosition.value;
            
            inputName.parentNode.replaceChild(employeeName, inputName);
            inputPosition.parentNode.replaceChild(employeePosition, inputPosition);

}}



