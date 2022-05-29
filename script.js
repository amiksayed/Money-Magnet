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
const inputErrorMessage = document.querySelector('.income-error-message', 'food-error-message', '.rent-error-message', '.clothes-error-message');

function negativeInput(input, error) {
    const inputErrorMessage = document.querySelector(error);
    if (input < 0) {
        inputErrorMessage.innerText = 'Enter a valid value!';
        inputErrorMessage.style.display = 'block';
    }
    else {
        inputErrorMessage.style.display = 'none';
    }
}

document.getElementById('calculate-button').addEventListener('click', function () {
    negativeInput(incomeInput.value, '.income-error-message');
    negativeInput(foodInput.value, '.food-error-message');
    negativeInput(rentInput.value, '.rent-error-message');
    negativeInput(clothInput.value, '.clothes-error-message');
    if (incomeInput.value > 0 && foodInput.value > 0 && rentInput.value > 0 && clothInput.value > 0) {
        const totalExpense = parseInt(foodInput.value) + parseInt(rentInput.value) + parseInt(clothInput.value);
        if (totalExpense <= incomeInput.value) {
            const totalBalance = parseInt(incomeInput.value) - totalExpense;
            totalExpenseDisplay.innerText = totalExpense;
            balanceDisplay.innerText = totalBalance;
            balanceErrorMessage.style.display = 'none';
            balanceDiv.style.display = 'block';
        }

        else {
            totalExpenseDisplay.innerText = totalExpense;
            balanceErrorMessage.innerText = 'Your income is less than your expense';
            balanceDiv.style.display = 'none';
        }
    }
    foodInput.value = '';
    rentInput.value = '';
    clothInput.value = '';
    saveInput.value = '';
})

document.getElementById('save-button').addEventListener('click', function () {
    savingAmountDisplay.innerText = incomeInput.value * (saveInput.value / 100);
    if (parseFloat(balanceDisplay.innerText) >= parseFloat(savingAmountDisplay.innerText)) {
        remainingBalanceDisplay.innerText = balanceDisplay.innerText - savingAmountDisplay.innerText;
        // remainingBalanceErrorMessage.style.display = 'none';
        remainingBalanceDiv.style.display = 'block';
    }
    else {
        remainingBalanceErrorMessage.innerText = 'You dont have sufficient balance';
        remainingBalanceDiv.style.display = 'none';
        remainingBalanceErrorMessage.style.display = 'block';
    }
    incomeInput.value = '';
    saveInput.value = '';
})

document.getElementById('calculate-button').addEventListener('blur', function () {
    negativeInput(incomeInput.value, '.income-error-message');
    negativeInput(foodInput.value, '.food-error-message');
    negativeInput(rentInput.value, '.rent-error-message');
    negativeInput(clothInput.value, '.clothes-error-message');
    inputErrorMessage.style.display = 'none';
})

document.getElementById('save-button').addEventListener('blur', function () {
    remainingBalanceErrorMessage.style.display = 'none';
    remainingBalanceDiv.style.display = 'block';
})
