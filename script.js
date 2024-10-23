function appendtoresult(value) {
    document.getElementById('hasil').value += value;
}
function clearResult() {
document.getElementById('hasil').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('hasil');
try {
    resultField.value = eval(resultField.value);
} catch (error) {
    resultField.value = 'Error';
}
}