document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    document.querySelectorAll('.buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            const action = btn.dataset.action;
            if (action === 'clear') {
                display.value = '';
                return;
            }
            if (action === 'equals') {
                try {
                    display.value = Function('return ' + display.value)();
                } catch (e) {
                    display.value = 'Fehler';
                }
                return;
            }
            display.value += value;
        });
    });
});
