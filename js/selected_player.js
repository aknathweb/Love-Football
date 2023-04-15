const card_button_locations = document.getElementsByClassName('player_button_task');
const selected_five_location = document.getElementById('selected_five_player');
const selected_player_number_location = document.getElementById('selected_player_number');

// check player card button are sellected or not 
// and create list element selected five player location
for (const card_button of card_button_locations) {
    card_button.addEventListener('click', (e) => {
        if (selected_five_location.querySelectorAll('li').length == 5) {
            alert("Maximum 5 Players already selected");
            return;
        }
        e.target.setAttribute('disabled', true);
        setTextElementValue(selected_player_number_location, selected_five_location.querySelectorAll('li').length + 1);
        const li = document.createElement('li');
        setTextElementValue(li, e.target.parentNode.parentNode.querySelector('h5').innerText);
        li.classList.add('my-2')
        selected_five_location.appendChild(li);
    });
}


