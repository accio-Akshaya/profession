let employees = [];

        function addUser() {
            const name = document.getElementById('name').value.trim();
            const profession = document.getElementById('profession').value.trim();
            const age = document.getElementById('age').value.trim();
            const errorDiv = document.getElementById('error');
            const successDiv = document.getElementById('success');

            if (!name || !profession || !age) {
                errorDiv.style.display = 'block';
                successDiv.style.display = 'none';
                return;
            }else{

            errorDiv.style.display = 'none';
            successDiv.style.display = 'block';
            }
            const newEmployee = {
                id: employees.length ? employees[employees.length - 1].id + 1 : 1,
                name,
                profession,
                age: parseInt(age, 10),
            };

            employees.push(newEmployee);
            renderEmployees();

            document.getElementById('name').value = '';
            document.getElementById('profession').value = '';
            document.getElementById('age').value = '';
        }

        function deleteEmployee(id) {
            employees = employees.filter(employee => employee.id !== id);
            renderEmployees();
        }

        function renderEmployees() {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';

            if (employees.length === 0) {
                employeeList.innerHTML = '<p class="empty-message">Data not found</p>';
                return;
            }

            employees.forEach(employee => {
                const employeeDiv = document.createElement('div');
                employeeDiv.className = 'employee';

                employeeDiv.innerHTML = `
                    <div> ${employee.name}        ${employee.profession}       ${employee.age} <div>
                    <button onclick="deleteEmployee(${employee.id})" class="delete-button">Delete</button>
                `;

                employeeList.appendChild(employeeDiv);
            });
        }