console.log('testB');



// Sample employee data passed from the back-end
//const employees = @Html.Raw(Json.Serialize(Model));

// Function to generate the organization chart
function generateChart(employees, rootid, container) {
   // console.log(employees);

    const subordinates = employees.filter(emp => emp.parentId === rootid);
  //  console.log(subordinates);
    //   if (subordinates.length === 0) {
    if (subordinates.employeeId === null) {
      //  console.log('Zero subordinates, no data');
        return;
    }
    const ul = document.createElement('ul');
    ul.classList.add('list-group');

    subordinates.forEach(subordinate => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'card');
        li.innerHTML = `<strong>Employee ID:</strong> ${subordinate.employeeId}<br><strong>Name:</strong> ${subordinate.name}`;
        ul.appendChild(li);

        generateChart(employees, subordinate.employeeId, li);
    });

    container.appendChild(ul);
  //  console.log('this is end of function');
}

function generateChartB() {

  //  console.log('this is end of function');
}



// Function to generate the organization chart
function generateChartB(employees, rootid, container) {
    const subordinates = employees.filter(emp => emp.parentId === rootid);
    if (subordinates.employeeId === null) return;

    const cardGroup = document.createElement('div');
    cardGroup.classList.add('card-group');

    subordinates.forEach(subordinate => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = `Employee ID: ${subordinate.employeeId}`;

        const cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.innerText = `Name: ${subordinate.name}`;

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);

        card.appendChild(cardBody);

        generateChart(employees, subordinate.employeeId, card);

        cardGroup.appendChild(card);
    });

    container.appendChild(cardGroup);
}



const chartContainer = document.getElementById('chartContainer');

generateChartB(employees, null, chartContainer);


         

