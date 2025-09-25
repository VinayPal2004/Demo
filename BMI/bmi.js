const form = document.querySelector('form');
const submit = document.querySelector('#submit');
const reset = document.querySelector('.ghost');
const result = document.querySelector('.bmi-value');
const range = document.querySelector('.bmi-value2');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        alert("Please enter valid height and weight");
    } else {
        const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));

        // Show BMI with HTML formatting
        result.innerHTML = `<p>Your BMI is: <strong>${bmi}</strong></p>`;

        // Show category with HTML formatting
        if (bmi < 18.5) {
            range.innerHTML = `<p style="color:blue;">You are <b>Underweight</b></p>`;
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            range.innerHTML = `<p style="color:green;">You are <b>Healthy</b></p>`;
        } 
        else if (bmi >= 25 && bmi <= 29.9) {
            range.innerHTML = `<p style="color:orange;">You are <b>Overweight</b></p>`;
        } 
        else {
            range.innerHTML = `<p style="color:red;">You are in <b>Obesity</b></p>`;
        }
    }
});

reset.addEventListener('click', () => {
    result.innerHTML = "--";
    range.innerHTML = "--";
});
