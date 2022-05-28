const incomeInput = document.getElementById('income-input');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothInput = document.getElementById('cloth-input');
const totalExpenseDisplay = document.getElementById('expense-display');
const balanceDisplay = document.getElementById('balance-display');
const balanceDiv = document.getElementById('balance');
const balanceErrorMessage = document.querySelector('.balance-error-message');
const saveInput = document.querySelector('.save-input');
const savingAmountDisplay = document.getElementById('saving-amount');
const remainingBalanceDisplay = document.getElementById('remaining-balance-display');
const remainingBalanceErrorMessage = document.querySelector('.remaining-balance-error-message');
const remainingBalanceDiv = document.getElementById('remaining-balance');

function negativeInput(input, error) {
    const incomeErrorMessage = document.querySelector(error);
    if (input < 0) {
        incomeErrorMessage.innerText = 'Enter a valid value!';
    }
}


document.getElementById('calculate-button').addEventListener('click', function () {
    negativeInput(incomeInput.value, '.income-error-message');
    negativeInput(foodInput.value, '.food-error-message');
    negativeInput(rentInput.value, '.rent-error-message');
    negativeInput(clothInput.value, '.clothes-error-message');
    if (incomeInput.value > 0 && foodInput.value > 0 && rentInput.value > 0 && clothInput.value > 0) {
        const totalExpense = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothInput.value);
        if (totalExpense < incomeInput.value) {

            const totalBalance = parseInt(incomeInput.value) - totalExpense;
            totalExpenseDisplay.innerText = totalExpense;
            balanceDisplay.innerText = totalBalance;
        }

        else {
            totalExpenseDisplay.innerText = totalExpense;
            balanceErrorMessage.innerText = 'Your income is less than your expense';
            balanceDiv.style.display = 'none';
        }
    }
})

document.getElementById('save-button').addEventListener('click', function () {
    savingAmountDisplay.innerText = incomeInput.value * (saveInput.value / 100);
    if (balanceDisplay.innerText >= savingAmountDisplay.innerText) {
        console.log(balanceDisplay.innerText );
        remainingBalanceDisplay.innerText = balanceDisplay.innerText - savingAmountDisplay.innerText;
    }
    else {
        remainingBalanceErrorMessage.innerText = 'You dont have sufficient balance';
        remainingBalanceDiv.style.display = 'none';
    }
})