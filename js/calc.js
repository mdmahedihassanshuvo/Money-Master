function getNumberValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);
    // inputField.value = '';
    return input;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodInput = getNumberValue('food-input');
    const rentInput = getNumberValue('rent-input');
    const clothesInput = getNumberValue('clothes-input');

    const totalCost = foodInput + rentInput + clothesInput;

    const costInput = document.getElementById('total-cost');
    const costString = costInput.innerText;
    const cost  = parseFloat(costString);
    costInput.innerText = totalCost;

    const incomeInputField = document.getElementById('income-input');
    const incomeInputFieldString = incomeInputField.value;
    const incomeInput = parseFloat(incomeInputFieldString);

    const currentBalance = incomeInput - totalCost;

    const currentBalanceField = document.getElementById('current-balance');
    const currentBalanceFieldString = currentBalanceField.innerText;
    const newBalance = parseFloat(currentBalanceFieldString)
    const newCurrentBalance = currentBalanceField.innerText = currentBalance;
    
})

document.getElementById('save-btn').addEventListener('click', function(){
    const saveInput = getNumberValue('save-input');
    const save = saveInput/100;
    
    const incomeInput = getNumberValue('income-input');

    const savings = incomeInput * save;

    const savingInputField = document.getElementById('saving-amount');
    const savingInputFieldString = savingInputField.innerText;
    const savingInput = parseFloat(savingInputFieldString);

    const totalSavings = savingInputField.innerText = savings;

    //.....................

    const currentBalanceField = document.getElementById('current-balance');
    const currentBalanceFieldString = currentBalanceField.innerText;
    const newBalance = parseFloat(currentBalanceFieldString);

    const CurrentRemainingAmount = newBalance - totalSavings;

    const remainingAmountField = document.getElementById('remaining-amount');
    const remainingAmountFieldString = remainingAmountField.innerText;
    const remainingAmount = parseFloat(remainingAmountFieldString);
    remainingAmountField.innerText = CurrentRemainingAmount;

})