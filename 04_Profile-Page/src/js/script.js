inputs = ["name", "role", "availability", "age", "location", "yoe", "email"];

function defaultModal() {
    inputs.forEach(input => {
        document.getElementById('modal-' + input).value = document.getElementById(input).innerHTML;
    });
}

function updateData() {
    inputs.forEach(input => {
        localStorage.setItem(input, document.getElementById('modal-' + input).value)
    });

    updateDisplay();
}

function updateDisplay() {
    inputs.forEach(input => {
        if (localStorage.getItem(input) !== null) {
            document.getElementById(input).innerHTML = localStorage.getItem(input)
        }
    });
}