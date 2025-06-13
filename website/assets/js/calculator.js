const display = document.getElementById('display');
const buttons = document.querySelectorAll('#calculator button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;
        if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        } else if (value === 'C') {
            display.value = '';
        } else {
            display.value += value;
        }
    });
});
