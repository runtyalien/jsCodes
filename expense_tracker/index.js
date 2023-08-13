const form = document.getElementById('expense-form');
const amountInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');
const categoryInput = document.getElementById('category');
const expenseList = document.getElementById('expense-list');

let expenses = [];

if (localStorage.getItem('expenses')) {
    expenses = JSON.parse(localStorage.getItem('expenses'));
    renderExpenses();
}

function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const row = document.createElement('tr');
        const amountCell = document.createElement('td');
        const descriptionCell = document.createElement('td');
        const categoryCell = document.createElement('td');
        const editCell = document.createElement('td');
        const deleteButton = document.createElement('button');

        amountCell.textContent = expense.amount.toFixed(2);
        descriptionCell.textContent = expense.description;
        categoryCell.textContent = expense.category;
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', () => {
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('btn', 'btn-secondary', 'btn-sm', 'ml-2');
        editButton.addEventListener('click', () => {
            amountInput.value = expense.amount;
            descriptionInput.value = expense.description;
            categoryInput.value = expense.category;
            expense.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            renderExpenses();
        });

        editCell.appendChild(editButton);
        editCell.appendChild(deleteButton);
        row.appendChild(amountCell);
        row.appendChild(descriptionCell);
        row.appendChild(categoryCell);
        row.appendChild(editCell);
        expenseList.appendChild(row);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(amountInput.value);
    const description = descriptionInput.value;
    const category = categoryInput.value;
    const expense = {
        amount,
        description,
        category
    };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    form.reset();
});

const clearExpenseButton = document.getElementById('clearExpenseButton');
clearExpenseButton.addEventListener('click', () => {
    expenses = [];
    localStorage.removeItem('expenses');
    renderExpenses();
});

const categories = ['Food', 'Fuel', 'Electricity', 'Movies'];
const categorySelect = document.getElementById('category');

categories.forEach(category => {
    const option = document.createElement('option');
    option.textContent = category;
    categorySelect.appendChild(option);
});

renderExpenses();
