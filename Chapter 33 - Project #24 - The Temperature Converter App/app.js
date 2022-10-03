const celsiusInput = document.querySelector('#celsius');
const fahrenheitInput = document.querySelector('#fahrenheit');
const kelvinInput = document.querySelector('#kelvin');
const tempInputs = document.querySelectorAll('input');

tempInputs.forEach(function (input) {
  input.addEventListener('input', function (e) {
    let tempValue = parseInt(e.target.value);
    let inputName = e.target.name;

    if (e.target.value === '') {
      celsiusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;

      return;
    }

    if (inputName === 'celsius') {
      //* Celsius to fahrenheit
      let fahrenheitValue = tempValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);

      //* Celsius to kelvin
      let kelvinValue = tempValue + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);
    } else if (inputName === 'fahrenheit') {
      //* Fahrenheit to celsius
      let celsiusValue = (tempValue - 32) / 1.8;
      celsiusInput.value = celsiusValue.toFixed(2);

      //* Fahrenheit to kelvin
      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue;
    } else if (inputName === 'kelvin') {
      //* Kelvin  to celsius
      let celsiusValue = tempValue - 273.15;
      celsiusInput.value = celsiusValue.toFixed(2);

      //* Kelvin  to fahrenheit
      let fahrenheitValue = (tempValue - 273.15) * 1.8 + 32;
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    }
  });
});
