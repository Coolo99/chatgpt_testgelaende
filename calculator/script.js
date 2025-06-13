document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.dataset.value;

            if (button.id === 'clear') {
                display.value = '';
                return;
            }

            if (button.id === 'equals') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
                return;
            }

            display.value += value;
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9' || ['+', '-', '*', '/', '.'].includes(e.key)) {
            display.value += e.key;
        } else if (e.key === 'Enter') {
            try {
                display.value = eval(display.value);
            } catch (err) {
                display.value = 'Error';
            }
        } else if (e.key === 'Backspace') {
            display.value = display.value.slice(0, -1);
        } else if (e.key === 'Escape') {
            display.value = '';
        }
    });
});
