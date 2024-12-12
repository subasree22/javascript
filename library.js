const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('registeredTable').querySelector('tbody');

function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const register = formData.get('register');
    const dob = formData.get('dob');
    const gender = formData.get('gender');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const address = formData.get('address');

    if (!name || !register || !dob || !gender || !email || !phone || !address) {
        alert('Please fill out all fields');
        return;
    }

    addRow({ name, register, dob, gender, email, phone, address });
    form.reset();
}

function addRow(data) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = data.name;
    row.appendChild(nameCell);

    const registerCell = document.createElement('td');
    registerCell.textContent = data.register;
    row.appendChild(registerCell);

    const dobCell = document.createElement('td');
    dobCell.textContent = data.dob;
    row.appendChild(dobCell);

    const genderCell = document.createElement('td');
    genderCell.textContent = data.gender;
    row.appendChild(genderCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = data.email;
    row.appendChild(emailCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = data.phone;
    row.appendChild(phoneCell);

    const addressCell = document.createElement('td');
    addressCell.textContent = data.address;
    row.appendChild(addressCell);

    const actionCell = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editRow(this);
    };
    actionCell.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteRow(this);
    };
    actionCell.appendChild(deleteButton);

    row.appendChild(actionCell);

    tableBody.appendChild(row);
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('register').value = cells[1].textContent;
    document.getElementById('dob').value = cells[2].textContent;
    document.querySelector(`input[name='gender'][value='${cells[3].textContent}']`).checked = true;
    document.getElementById('email').value = cells[4].textContent;
    document.getElementById('phone').value = cells[5].textContent;
    document.getElementById('address').value = cells[6].textContent;

    row.remove();
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
