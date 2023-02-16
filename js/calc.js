function getNumberValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const input = parseFloat(inputFieldString);
    inputField.value = '';
    return input;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodInput = getNumberValue('food-input');
    const rentInput = getNumberValue('rent-input');
    const clothesInput = getNumberValue('clothes-input');
    const incomeInputField = document.getElementById('income-input');
    const incomeInputFieldString = incomeInputField.value;
    const incomeInput = parseFloat(incomeInputFieldString);

    if(isNaN(foodInput) || isNaN(rentInput) || isNaN(clothesInput) || isNaN(incomeInput)){
        alert('Please inter a valid number');
        return;
    }

    
    const totalCost = foodInput + rentInput + clothesInput;

    if(totalCost > incomeInput){
        alert('cut your coat according to your cloth');
        return
    }
    
    const costInput = document.getElementById('total-cost');
    const costString = costInput.innerText;
    const cost  = parseFloat(costString);
    costInput.innerText = totalCost;
    
    const currentBalance = incomeInput - totalCost;
    

    const currentBalanceField = document.getElementById('current-balance');
    const currentBalanceFieldString = currentBalanceField.innerText;
    const newBalance = parseFloat(currentBalanceFieldString);
    const newCurrentBalance = currentBalanceField.innerText = currentBalance;
    
})

document.getElementById('save-btn').addEventListener('click', function(){
    const saveInput = getNumberValue('save-input');
    const save = saveInput/100;
    
    const incomeInput = getNumberValue('income-input');

    const savings = incomeInput * save;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceString = currentBalance.innerText;
    const newCurrentBalance = parseFloat(currentBalanceString);
    if(savings > newCurrentBalance){
        alert("you don't have enough balance to save");
        return;
    }

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