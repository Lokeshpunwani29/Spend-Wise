const cardCont = document.querySelector('.cardCont');
const card = document.querySelector('.card');
// const description = document.querySelector('.description');
// const numberofPersons = document.querySelector('.numberofPersons');
// const totalExpense = document.querySelector(".total Expense")
const overallExpense = document.querySelector('.overallExpense');
const totalLent = document.querySelector('.totalLent');

var expenseArray = [];

function getter() {
    const tempArr = localStorage.getItem("expenseArr")
    if (tempArr.length <= 0) return;
    expenseArray = [...tempArr];
}

function showCards() {

    expenseArray.forEach(card => {
        const card = document.createElement('div')
        card.className = "card";
        card.innerHTML = `
            <div class="upperCard">
                    <div class="line">Expense Description: <span class="description">${card.description}</span></div>
                    <div class="line">Number of Persons: <span class="numberOfPersons">${card.NumberOfPersons}</span></div>
                    <div class="line">Total Expense: &#8377;<span class="totalExpense">${card.ExpenseINR}</span></div>
                    <div class="line">Expense per Person: &#8377;<span class="expensePerPerson">${card.ExpenseINR/card.NumberOfPersons}</span></div>
                    <div class="line">You Lent: &#8377;<span class="youLent">${card.ExpenseINR-(card.ExpenseINR/card.NumberOfPersons)}</span></div>
                </div>
                <div class="button">
                    <button class="delete">Delete</button>
                    <button class="edit">Edit</button>
                </div>
        `
    })
}

// Function to save form data to Local Storage
function saveFormData() {
    const ExpenseDescription = document.getElementById('ExpDes').value;
    const NumberOfPersons = document.getElementById('NoOfPer').value;
    const ExpenseINR = document.getElementById('exp').value;

    // Object created
    const expenseObj = {
        id: Date.now(),
        description: ExpenseDescription,
        numberofpersons: NumberOfPersons,
        expenseinr: ExpenseINR
    }
    // Save data to Local Storage
    let arr = localStorage.getItem('expenseArr');
    if (arr.length === 0) {
        return;
    }
    arr.push(expenseObj);
}

function deleteData(id) {
    let arr = localStorage.getItem('expenseArr');
    let updatedArr = arr.filter((item) => item.id !== id)

}

// Function to load form data from Local Storage
function loadFormData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    // Populate the form fields if data exists
    if (name) {
        document.getElementById('name').value = name;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
}

// Event listener for form submission
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    saveFormData(); // Save the form data to Local Storage
    alert('Form submitted and data saved to Local Storage!');
});

// Load form data when the page is loaded
window.onload = loadFormData;