const per_player_money_location = document.getElementById('per_player_money');
const calculate_player_expense_location = document.getElementById('calculate_player_expense');
const player_expense_location = document.getElementById('player_expense');
const manager_money_location = document.getElementById('manager_money');
const coach_money_location = document.getElementById('coach_money');
const calculate_total_expense_location = document.getElementById('calculate_total_expense');
const total_expense_location = document.getElementById('total_expense');

// budget section first calculation perform base on calculate total button click
calculate_player_expense_location.addEventListener('click', () => {
    const total_selected_player = selected_five_location.querySelectorAll('li').length;
    if (total_selected_player == 0) {
        alert('No Player Selected');
        return;
    }
    if (errorHandle([per_player_money_location.value], 'Fill per player value using positive number'))
        setTextElementValue(player_expense, total_selected_player * per_player_money_location.value);

    else {
        setTextElementValue(player_expense, "00");
        setInputFieldValue(per_player_money_location, "");
    }
});

// budget section second calculation perform base on calculate total button click
calculate_total_expense_location.addEventListener('click', () => {
    if (errorHandle([manager_money_location.value, coach_money_location.value, player_expense.innerText], "Please fill the input field with positive value and ensure you click calculate button"))
        // total_expense_location.innerText = parseFloat(manager_money_location.value) + parseFloat(coach_money_location.value) + parseFloat(player_expense.innerText);
        setTextElementValue(total_expense_location, parseFloat(manager_money_location.value) + parseFloat(coach_money_location.value) + parseFloat(player_expense.innerText));
    else {
        [manager_money_location.value, coach_money_location.value] = [manager_money_location.value, coach_money_location.value].map(a => a = "");
        setTextElementValue(total_expense_location, "00");
    }
});